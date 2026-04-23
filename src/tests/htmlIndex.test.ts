import { describe, expect, it } from 'vitest';
import { classNameToHtmlFile, classNameToTypeFile, htmlFileToTypeFile, typeFileToHtmlFile } from '../sync/htmlIndex';

describe('htmlIndex', () => {
    it('maps class name to type file', () => {
        expect(classNameToTypeFile('DzNode')).toBe('dz_node.d.ts');
        expect(classNameToTypeFile('DzERCFreeze')).toBe('dz_eRCFreeze.d.ts');
        expect(classNameToTypeFile('Dz3DViewport')).toBe('dz_3DViewport.d.ts');
        expect(classNameToTypeFile('Image')).toBe('dz_image.d.ts');
        expect(classNameToTypeFile('DzImage')).toBe('dz_image.d.ts');
    });

    it('maps class name to html file', () => {
        expect(classNameToHtmlFile('DzNode')).toBe('node_dz.html');
        expect(classNameToHtmlFile('DzERCFreeze')).toBe('ercfreeze_dz.html');
        expect(classNameToHtmlFile('DzImage')).toBe('image.html');
        expect(classNameToHtmlFile('Image')).toBe('image.html');
    });

    it('maps type file to html file', () => {
        expect(typeFileToHtmlFile('dz_node.d.ts')).toBe('node_dz.html');
        expect(typeFileToHtmlFile('dz_3DViewport.d.ts')).toBe('3dviewport_dz.html');
        expect(typeFileToHtmlFile('dz_image.d.ts')).toBe('image.html');
    });

    it('maps html file to type file', () => {
        expect(htmlFileToTypeFile('node_dz.html')).toBe('dz_node.d.ts');
        expect(htmlFileToTypeFile('image.html')).toBe('dz_image.d.ts');
    });
});
