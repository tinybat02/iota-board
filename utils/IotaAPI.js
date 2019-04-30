import { composeAPI } from '@iota/core'
const converter = require('@iota/converter')
import { convertMessage } from './convertMessage'

const iota = composeAPI({
    'provider': 'https://nodes.thetangle.org:443'
})

const fetchFromIota = (bundle) => {
    let searchVarsBundle = {'bundles': [bundle]}

    return iota.findTransactions(searchVarsBundle)
            .then(hashes => {
                return iota.getBundle(hashes[0])
                        .then(bundle => {
                            const message = bundle[0].signatureMessageFragment.replace(/\d+$/, "")
                            const descrypted = converter.trytesToAscii(message)
                            return {
                                error: false,
                                message: convertMessage(descrypted)
                            }
                        })
                        .catch(err => {
                            console.log('From inner api call ...')
                            return {
                                error: true,
                                message: err
                            }
                        })
            })
            .catch(err => {
                console.log('from api call ....')
                return {
                    error: true,
                    message: err
                }
            })
}

export default fetchFromIota