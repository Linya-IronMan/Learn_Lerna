module.exports = {
    extends: ['cz'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(.*?)((.*?)):\s?(.*)$/,
            headerCorrespondence: ['type', 'scope', 'subject'],
        },
    },
    rules: {
        'type-empty': [0, 'always'],
        'subject-empty': [0, 'always'],
        'scope-empty': [0, 'always'],
        'scope-enum': [1, 'always'],
    },
};
// Hello World Test
