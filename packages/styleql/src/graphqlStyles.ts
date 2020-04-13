import { schema } from "nexus-future";
import { makeSchema } from "@nexus/schema";
import path from 'path';

const textColorsEnum = schema.enumType({
    name: "TextColors",
    members: ['GRAY_800', 'PURPLE_900', 'INDIGO_200']
})

const fontsEnum = schema.enumType({
    name: "Fonts",
    members: ['SANS', 'SERIF', 'MONO']
})

const queries = schema.queryType({
    definition(t) {
        t.list.string('textColor', {
            args: {
                color: schema.arg({type: "TextColors", required: true}),
                hover: schema.arg({ type: "TextColors" }),
                focus: schema.arg({ type: "TextColors" }),
            },
            resolve(_root, {color, hover = false, focus = false}) {
                const colorClassname = `text-${color}`;
                const colorHoverClassname = hover && `hover:text-${hover}`;
                const colorFocusClassname = focus && `focus:text-${focus}`;
                return [colorClassname, colorHoverClassname, colorFocusClassname].filter(
                    Boolean
                );
            }
        })
        t.list.string('fontFamily', {
            args: {
                font: schema.arg({type: "Fonts", required: true})
            },
            resolve(_root, {font}) {
                switch (font) {
                    case "SANS":
                        return ["font-sans"];
                    case "SERIF":
                        return ["font-serif"];
                    case "MONO":
                        return ["font-mono"];
                    default:
                        return []
                }
            }
        })

    }
})


export const s = makeSchema({ types: [ queries, textColorsEnum, fontsEnum], outputs: true });
