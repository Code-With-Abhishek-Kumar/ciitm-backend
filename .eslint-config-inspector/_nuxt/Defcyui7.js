const t = 'glob',
  n = [{ include: '#root' }],
  e = {
    root: {
      patterns: [
        { include: '#star' },
        { include: '#slash' },
        { include: '#bracket-round' },
        { include: '#bracket-square' },
        { include: '#bracket-curly' },
        { include: '#operator' },
      ],
    },
    star: { match: '\\*+', name: 'punctuation.definition.glob' },
    operator: { match: '[?]', name: 'keyword.operator.glob' },
    slash: { match: '[/\\\\]+', name: 'punctuation.definition.glob' },
    'bracket-round': {
      begin: '(\\()',
      beginCaptures: { 0: { name: 'punctuation.bracket.round.glob' } },
      end: '(\\))',
      endCaptures: { 0: { name: 'punctuation.bracket.round.glob' } },
      patterns: [{ include: '#root' }],
    },
    'bracket-square': {
      begin: '(\\[)',
      beginCaptures: { 0: { name: 'punctuation.bracket.square.glob' } },
      end: '(\\])',
      endCaptures: { 0: { name: 'punctuation.bracket.square.glob' } },
      patterns: [
        { match: '-', name: 'punctuation.definition.glob' },
        { match: '[^\\]-]', name: 'constant.glob' },
      ],
    },
    'bracket-curly': {
      begin: '(\\{)',
      beginCaptures: { 0: { name: 'punctuation.bracket.curly.glob' } },
      end: '(\\})',
      endCaptures: { 0: { name: 'punctuation.bracket.curly.glob' } },
      patterns: [
        { match: ',', name: 'punctuation.definition.glob' },
        { match: '[^\\],]', name: 'constant.glob' },
      ],
    },
    string: { name: 'string.glob', match: '.+' },
  },
  a = 'text.glob',
  o = { name: t, patterns: n, repository: e, scopeName: a };
export {
  o as default,
  t as name,
  n as patterns,
  e as repository,
  a as scopeName,
};
