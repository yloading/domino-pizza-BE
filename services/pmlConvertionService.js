const express = require('express');
const convert = require('xml-js');

const pmlConvertionService = {
    transformPmlToXml(data) {
        let changedLeftCurleyBrace = data.replaceAll('{', '<')
        let changedOpeningClosingTag = changedLeftCurleyBrace.replaceAll('}', '>')
        const pmlToXML = changedOpeningClosingTag.replaceAll(/\\/g, '/')

        return pmlToXML
    },

    xmlToJSon(xml) {
        var options = {
            compact: true,
            trim: true,
            spaces: 4,
            ignoreDeclaration: true,
            ignoreInstruction: true,
            ignoreComment: true,
            ignoreCdata: true,
            ignoreDoctype: true,
        };
        const result = convert.xml2json(xml, options);
        return JSON.parse(result);
    }

}

module.exports = pmlConvertionService;