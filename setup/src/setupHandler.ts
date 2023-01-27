import fs from 'fs'
import path from 'path'

import { standardAuthHandler } from '@redwoodjs/cli-helpers'

import { Args } from './setup'

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
)

export async function handler({ force: forceArg }: Args) {
  standardAuthHandler({
    basedir: __dirname,
    forceArg,
    provider: 'magicLink',
    authDecoderImport:
      "import { authDecoder } from '@redwoodjs/auth-magiclink-api'",
    apiPackages: [
      `@redwoodjs/auth-magiclink-api@${version}`,
      '@magic-sdk/admin',
    ],
    webPackages: [`@redwoodjs/auth-magiclink-web@${version}`, 'magic-sdk'],
    notes: [
      'To get your application keys, go to https://dashboard.magic.link/login ',
      'Then navigate to the API keys add them to your .env config options.',
      'See: https://redwoodjs.com/docs/authentication#for-magiclink',
    ],
  })
}
