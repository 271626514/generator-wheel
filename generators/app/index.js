/**
 * Created by syzx9801@163.com on 2017/12/8.
 */
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  writeGenerators () {

  }

  prompting () {
    this.log(`Welcome use Generator Wheel!`)

    const prompts = [
      {
        name: 'projectName',
        message: '项目名:',
        default: (path) => {
          let array = this.contextRoot.split('\\');
          return array[array.length-1];
        }
      },
      {
        name: 'description',
        message: '描述:',
        default: ''
      },
      {
        name: 'version',
        message: '版本号:',
        default: '1.0.0'
      },
      {
        name: 'authorName',
        message: '作者:',
        default: ''
      },
      {
        name: 'htmlType',
        message: '请选择开发平台PC or M?',
        type: 'list',
        choices: ['PC','M']
      }
    ];
    return this.prompt(prompts).then(props => {
      let {
          projectName,
          description,
          version,
          authorName,
          htmlType
          } = this.props = props;
      this.projectName = projectName;
      this.description = description;
      this.version = version;
      this.authorName = authorName;
      this.htmlType = htmlType;
    });
  }

  writing () {
    this.writeGenerators();
  }

  end () {
    this.log(`Congratulate!You set up Generator Wheel now. And then,you maybe key up 'npm i' to install packages`)
    this.log(`${this.props}`)
  }
};
