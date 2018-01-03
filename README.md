To install, run: `npm i -S react-masonry-ui`.

To publish, don't forget to update the `package.json` versioning. After that, you can run `npm login` followed by `npm publish` to distribute a new release to the world.

Steps followed to create the react component as an npm package:
- `npm init -y` to create a new package
- Add `react` and `styled-components` as `peerDependencies`
- Add all the `devDependencies` required to create a distribution build
- Add the build scripts and eslint/babel files for development
- Install `storybook` globally and run `getstorybook` to install `storybook` to the build for development
- Add `.npmignore` and `.gitignore` files
