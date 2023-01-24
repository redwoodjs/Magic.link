Redwood magic.link Auth integration
===================================

> *NOTE:* This package is no longer maintained

magic.link used to be an officially supported auth provider in RedwoodJS. But, starting with Redwood v4 we decided we needed to limit the number of auth providers we maintain support for. Based on usage statistics we decided to stop maintaining the magic.link auth integration.

This was the PR that removed support for magic.link and a few more: https://github.com/redwoodjs/redwood/pull/7138
That means this was the last commit that had support for magic.link: https://github.com/redwoodjs/redwood/commit/3d057db199487ea0b17240317d66ddde3f83f332

If you want to use magic.link as your auth provider we recommend you first check to see if anyone has forked this repo (by using the Network Graph) and have an active fork. If not you can fork this repo and publish the packages to npm. That way you and the rest of the community can keep using magic.link auth. You can also get the community's help keeping the magic.link auth integration maintained.

Even though it's not maintained anymore you can try it out by running `yarn rw setup auth @redwoodjs/auth-magiclink`. It might or might not work. Finding a fork of this repo that has published packages to npm is a better choice. Just make sure you do your due diligence on their code before you start using it.
