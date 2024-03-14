import Generator from 'yeoman-generator'
export default class extends Generator {
    async prompting() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'name',
            message: '项目名',
            default:this.appname
        }])
    }
    writing() {
        // copyTpl方法会忽略以.开头的文件，需要手动辅助
        const fileNames=['.babelrc']
        fileNames.forEach(fileName=>{
            this.fs.copyTpl(
                this.templatePath(fileName),
                this.destinationPath(this.answers.name+'/'+fileName),
            );
        })
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(this.answers.name),
            { name: this.answers.name } // template context
        );
    }
}