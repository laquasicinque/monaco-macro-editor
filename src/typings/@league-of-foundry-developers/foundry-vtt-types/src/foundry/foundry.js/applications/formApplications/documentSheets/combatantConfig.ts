
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\documentSheets\\combatantConfig.d.ts",
      "import{ConfiguredDocumentClass}from'../../../../../types/helperTypes';declare global{/**\n * The Application responsible for configuring a single Combatant document within a parent Combat.\n *\n * @typeParam Options - the type of the options object\n * @typeParam Data    - The data structure used to render the handlebars template.\n */class CombatantConfig<\nOptions extends DocumentSheet.Options=CombatantConfig.Options,Data extends CombatantConfig.Data<Options>=CombatantConfig.Data<Options>>extends DocumentSheet<Options,Data,InstanceType<ConfiguredDocumentClass<typeof Combatant>>>{/**\n * @defaultValue\n * ```typescript\n * foundry.utils.mergeObject(super.defaultOptions, {\n *   id: \"combatant-config\",\n *   title: game.i18n.localize(\"COMBAT.CombatantConfig\"),\n *   classes: [\"sheet\", \"combat-sheet\"],\n *   template: \"templates/sheets/combatant-config.html\",\n *   width: 420\n * });\n * ```\n */static get defaultOptions():CombatantConfig.Options;/** @override */get title():string;/**\n * @param event - (unused)\n * @override\n */protected _updateObject(event:Event,formData:CombatantConfig.FormData):Promise<InstanceType<ConfiguredDocumentClass<typeof Combatant>>|undefined>;}namespace CombatantConfig{interface Options extends DocumentSheet.Options{id:'combatant-config';title:string;classes:string[];template:string;width:number;}type Data<Options extends DocumentSheet.Options>=DocumentSheet.Data<\nInstanceType<ConfiguredDocumentClass<typeof Combatant>>,Options>;type FormData=Pick<foundry.data.CombatantData,'defeated'|'hidden'|'img'|'initiative'|'name'>;}}"
    ]
  