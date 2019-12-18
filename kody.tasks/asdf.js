/**
 * asdf - installs version manager for specific technologies
 * @license MIT
 * @author gvlekke
 */
const { info } = console
const task = {
  name: 'asdf',
  description: 'Setup asdf plugins (asdf should be installed already)',
  exec: function(resolve, reject, shell, config, log) {
    const { asdf_plugins: plugins } = config
    const asdfInstalled = shell.which('asdf') !== null
    if(!asdfInstalled) {
      info(log('first install asdf trough brew task or use "brew install asdf"'))
      reject(new Error('NO ASDF INSTALLED'));
    } else {
      plugins.forEach(element => {
        info(log(`install plugin ${element.technology}`));
        shell.exec(`asdf plugin-add ${element.technology} ${element.url}`);

        element.versions.forEach(version => {
          shell.exec(`asdf install ${element.technology} ${version}`);
        });
      });
    }
  }
}

module.exports = task