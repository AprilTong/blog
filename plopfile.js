const moment = require('moment')
module.exports = function(plop) {
    plop.setGenerator('create', {
        description: '创建一个新的md文件',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: '请输入标题',
                default: '标题',
            },
            {
                type: 'input',
                name: 'date',
                message: '日期',
                default: moment().format('YYYY-MM-DD'),
            },
            {
                type: 'list',
                name: 'tag',
                message: '请选择标签',
                choices: ['CSS', 'Javascript', 'Vue', 'Webpack', '生活', '工具', '简单算法'],
            },
        ],
        actions: (data) => {
            const date = '{{date}}'
            const actions = [
                {
                    type: 'add',
                    path: `docs/${date}.md`,
                    templateFile: 'plop-templates/view/index.hbs',
                    data: {
                        name: date,
                    },
                },
            ]
            return actions
        },
    })
}
