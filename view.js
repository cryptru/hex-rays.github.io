const t = new Terminal()
    t.setHeight('300px')
    t.setWidth('600px')
    t.setMargin('auto')
    t.setMargin('100px auto auto auto')
    t.setPadding('10px')
    t.setBorder('3px solid #820333')
    t.borderRadius('10px')
    t.overflow('scroll')
    document.body.appendChild(t.html)

    t.input('root $ ', ctxt)

    function ctxt (input) {
        if ('whoami' == input) {
            t.print('name: █████ La██')
            t.print('age: 1█')
            t.print('work: Ag███')
            t.print('twttr: hex_64')
            t.print('msg: t.me/')
        } else {
            t.print('root: command not found: ' + input)
        } return t.input('root $ ', ctxt);
    }