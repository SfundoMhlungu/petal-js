// we metadata from the parser encoding location in app of elements with id's
// we need a get and setChild, remove function 

// e.g get("id")  return that actual element(in dom)
// setChild - set in vdom - diff
// remove - remove in vdom - diff

export const views = {



an : {
  name: 'an.js',
  app: [
    {
      root: {
        type: 'element',
        node: 'div',
        attrs: { class: 'nsf', id: 'sji' },
        loc: { line: 23, column: 0 },
        children: [
          {
            type: 'textNode',
            value: 'data.name',
            inState: true,
            loc: { line: 24, column: 4 },
            parent: 0
          },
          {
            type: 'element',
            node: 'p',
            attrs: { class: 'id' },
            loc: { line: 26, column: 4 },
            parent: 0,
            children: [
              {
                type: 'textNode',
                value: 'noriyega',
                inState: false,
                loc: { line: 27, column: 8 },
                parent: 1
              }
            ]
          },
          {
            type: 'element',
            node: 'section',
            attrs: { class: 'em' },
            loc: { line: 28, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'p',
                attrs: { class: 'm' },
                loc: { line: 29, column: 8 },
                parent: 2,
                children: [
                  {
                    type: 'textNode',
                    value: 'Sed ut perspiciatinventore verita nulla pariatur',
                    inState: false,
                    loc: { line: 30, column: 12 },
                    parent: 3
                  },
                  {
                    type: 'element',
                    node: 'button',
                    attrs: { onclick: { value: '#canPrintel' } },
                    loc: { line: 31, column: 12 },
                    parent: 3,
                    children: [
                      {
                        type: 'textNode',
                        value: 'this is a button',
                        inState: false,
                        loc: { line: 32, column: 16 },
                        parent: 4
                      }
                    ]
                  }
                ]
              },
              {
                type: 'element',
                node: 'div',
                attrs: { class: 'explanation, ll', onclick: 'hide' },
                loc: { line: 33, column: 8 },
                parent: 2,
                children: [
                  {
                    type: 'element',
                    node: 'h1',
                    attrs: {},
                    loc: { line: 34, column: 12 },
                    parent: 5,
                    children: [
                      {
                        type: 'textNode',
                        value: 'I made this, spaces are important',
                        inState: false,
                        loc: { line: 35, column: 16 },
                        parent: 6
                      }
                    ]
                  }
                ]
              },
              {
                type: 'element',
                node: 'form',
                attrs: {},
                loc: { line: 36, column: 8 },
                parent: 2,
                children: [
                  {
                    type: 'element',
                    node: 'label',
                    attrs: {},
                    loc: { line: 37, column: 12 },
                    parent: 7,
                    children: [
                      {
                        type: 'textNode',
                        value: 'i should definetley',
                        inState: false,
                        loc: { line: 38, column: 16 },
                        parent: 8
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'input',
                    attrs: { placeholder: { value: 'data.bottom' } },
                    loc: { line: 39, column: 12 },
                    parent: 7
                  }
                ]
              },
              {
                type: 'element',
                node: 'div',
                attrs: { ref: 'l' },
                loc: { line: 41, column: 8 },
                parent: 2,
                children: [
                  {
                    type: 'loop',
                    property: 'person',
                    target: 'data.persons',
                    attrs: {},
                    loc: { line: 42, column: 12 },
                    parent: 9,
                    children: [
                      {
                        type: 'element',
                        node: 'label',
                        attrs: {},
                        loc: { line: 43, column: 16 },
                        parent: 10,
                        children: [
                          {
                            type: 'textNode',
                            value: 'person.name',
                            inState: true,
                            loc: { line: 44, column: 20 },
                            parent: 11
                          }
                        ]
                      },
                      {
                        type: 'element',
                        node: 'label',
                        attrs: {},
                        loc: { line: 45, column: 16 },
                        parent: 10,
                        children: [
                          {
                            type: 'textNode',
                            value: 'person.age',
                            inState: true,
                            loc: { line: 46, column: 20 },
                            parent: 12
                          }
                        ]
                      },
                      {
                        type: 'element',
                        node: 'img',
                        attrs: { src: { value: 'person.avatar' } },
                        loc: { line: 47, column: 16 },
                        parent: 10
                      },
                      {
                        type: 'element',
                        node: 'button',
                        attrs: { onclick: { value: '#print(person)' } },
                        loc: { line: 48, column: 16 },
                        parent: 10
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'element',
      node: 'img',
      attrs: { src: '1.jpg', id: 'uyh' },
      loc: { line: 51, column: 0 }
    },
    {
      type: 'element',
      node: 'img',
      attrs: { src: '2.png', id: 'm' },
      loc: { line: 52, column: 0 }
    },
    {
      type: 'element',
      node: 'br',
      attrs: {},
      loc: { line: 53, column: 3 }
    },
    {
      root: {
        type: 'element',
        node: 'div',
        attrs: { id: 'jjn' },
        loc: { line: 56, column: 0 },
        children: [
          {
            type: 'element',
            node: 'label',
            attrs: {},
            loc: { line: 57, column: 4 },
            parent: 13,
            children: [
              {
                type: 'textNode',
                value: 'hello world',
                inState: false,
                loc: { line: 58, column: 8 },
                parent: 14
              }
            ]
          },
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'talents' },
            loc: { line: 59, column: 4 },
            parent: 13,
            children: [
              {
                type: 'loop',
                property: 'talent',
                target: 'talents',
                attrs: {},
                loc: { line: 60, column: 8 },
                parent: 15,
                children: [
                  {
                    type: 'element',
                    node: 'label',
                    attrs: {},
                    loc: { line: 62, column: 12 },
                    parent: 16,
                    children: [
                      {
                        type: 'textNode',
                        value: 'talent.name',
                        inState: true,
                        loc: { line: 63, column: 16 },
                        parent: 17
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'label',
                    attrs: {},
                    loc: { line: 64, column: 12 },
                    parent: 16,
                    children: [
                      {
                        type: 'textNode',
                        value: 'talent.level',
                        inState: true,
                        loc: { line: 65, column: 16 },
                        parent: 18
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ],
  state: { data: '{}', talents: '{}' }
}, 
  
  nav : {
  name: 'nav.js',
  app: [
    {
      root: {
        type: 'element',
        node: 'div',
        attrs: { class: 'nav' },
        loc: { line: 2, column: 0 },
        children: [
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'logo' },
            loc: { line: 3, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'img',
                attrs: {},
                loc: { line: 4, column: 8 },
                parent: 1
              }
            ]
          },
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'navigation' },
            loc: { line: 5, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'ul',
                attrs: { class: 'links' },
                loc: { line: 6, column: 8 },
                parent: 2,
                children: [
                  {
                    type: 'element',
                    node: 'li',
                    attrs: { class: 'link, btn' },
                    loc: { line: 7, column: 12 },
                    parent: 3,
                    children: [
                      {
                        type: 'textNode',
                        value: 'Home',
                        inState: false,
                        loc: { line: 8, column: 16 },
                        parent: 4
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'li',
                    attrs: { class: 'link, btn' },
                    loc: { line: 9, column: 12 },
                    parent: 3,
                    children: [
                      {
                        type: 'textNode',
                        value: 'Services',
                        inState: false,
                        loc: { line: 10, column: 16 },
                        parent: 5
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'li',
                    attrs: { class: 'link, btn' },
                    loc: { line: 11, column: 12 },
                    parent: 3,
                    children: [
                      {
                        type: 'textNode',
                        value: 'Contacts',
                        inState: false,
                        loc: { line: 12, column: 16 },
                        parent: 6
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'li',
                    attrs: { class: 'link, btn' },
                    loc: { line: 13, column: 12 },
                    parent: 3,
                    children: [
                      {
                        type: 'textNode',
                        value: 'about',
                        inState: false,
                        loc: { line: 14, column: 16 },
                        parent: 7
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
},
proud: {
  name: 'proudofproject.js',
  app: [
    {
      root: {
        type: 'element',
        node: 'div',
        attrs: { class: 'proud-of-section' },
        loc: { line: 3, column: 0 },
        children: [
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'description' },
            loc: { line: 4, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'div',
                attrs: { class: 'describe' },
                loc: { line: 5, column: 8 },
                parent: 1,
                children: [
                  {
                    type: 'element',
                    node: 'label',
                    attrs: {},
                    loc: { line: 6, column: 12 },
                    parent: 2,
                    children: [
                      {
                        type: 'textNode',
                        value: 'lorem ipsum',
                        inState: false,
                        loc: { line: 7, column: 16 },
                        parent: 3
                      }
                    ]
                  },
                  {
                    type: 'element',
                    node: 'label',
                    attrs: {},
                    loc: { line: 8, column: 12 },
                    parent: 2,
                    children: [
                      {
                        type: 'textNode',
                        value: 'eish',
                        inState: false,
                        loc: { line: 9, column: 16 },
                        parent: 4
                      }
                    ]
                  }
                ]
              },
              {
                type: 'element',
                node: 'div',
                attrs: { class: 'links' },
                loc: { line: 10, column: 8 },
                parent: 1
              }
            ]
          }
        ]
      }
    }
  ]
},
hero :{
  name: 'hero.js',
  app: [
    {
      root: {
        type: 'element',
        node: 'div',
        attrs: { class: 'hero-section' },
        loc: { line: 5, column: 0 },
        children: [
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'introduction' },
            loc: { line: 6, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'h1',
                attrs: {},
                loc: { line: 7, column: 8 },
                parent: 1,
                children: [
                  {
                    type: 'textNode',
                    value: 'Hello, I am Sfundo',
                    inState: false,
                    loc: { line: 8, column: 12 },
                    parent: 2
                  }
                ]
              },
              {
                type: 'element',
                node: 'h2',
                attrs: {},
                loc: { line: 9, column: 8 },
                parent: 1,
                children: [
                  {
                    type: 'textNode',
                    value: 'I create web and mobile applications with web technologies',
                    inState: false,
                    loc: { line: 10, column: 12 },
                    parent: 3
                  }
                ]
              }
            ]
          },
          {
            type: 'element',
            node: 'div',
            attrs: { class: 'Hero' },
            loc: { line: 11, column: 4 },
            parent: 0,
            children: [
              {
                type: 'element',
                node: 'img',
                attrs: { src: '1.png' },
                loc: { line: 12, column: 8 },
                parent: 4
              }
            ]
          }
        ]
      }
    }
  ]
}

}
