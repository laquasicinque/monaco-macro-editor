
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\chatMessage.d.ts",
      "import{ConfiguredDocumentClass,ConstructorDataType}from'../../../types/helperTypes';import{DocumentModificationOptions}from'../../common/abstract/document.mjs';declare global{/**\n * The client-side ChatMessage document which extends the common BaseChatMessage abstraction.\n * Each ChatMessage document contains ChatMessageData which defines its data schema.\n *\n * @see {@link data.ChatMessageData}              The ChatMessage data schema\n * @see {@link documents.Messages}                The world-level collection of ChatMessage documents\n *\n * @param data - Initial data provided to construct the ChatMessage document\n */class ChatMessage extends ClientDocumentMixin(foundry.documents.BaseChatMessage){constructor(data?:ConstructorParameters<ConstructorOf<foundry.documents.BaseChatMessage>>[0],context?:ConstructorParameters<ConstructorOf<foundry.documents.BaseChatMessage>>[1]);/**\n * If the chat message contains a Roll instance, cache it here\n * @defaultValue `null`\n */protected _roll:Roll|null;/**\n * Return the recommended String alias for this message.\n * The alias could be a Token name in the case of in-character messages or dice rolls.\n * Alternatively it could be a User name in the case of OOC chat or whispers.\n */get alias():string;/**\n * Is the current User the author of this message?\n */get isAuthor():boolean;/**\n * Return whether the content of the message is visible to the current user.\n * For certain dice rolls, for example, the message itself may be visible while the content of that message is not.\n */get isContentVisible():boolean;/**\n * Test whether the chat message contains a dice roll\n */get isRoll():boolean;/**\n * Return the Roll instance contained in this chat message, if one is present\n */get roll():Roll|null;/**\n * Return whether the ChatMessage is visible to the current User.\n * Messages may not be visible if they are private whispers.\n */get visible():boolean;/**\n * The User who created the chat message.\n */get user():User|undefined;/** @override */\nprepareData():void;/**\n * Transform a provided object of ChatMessage data by applying a certain rollMode to the data object.\n * @param chatData - The object of ChatMessage data prior to applying a rollMode preference\n * @param rollMode - The rollMode preference to apply to this message data\n * @returns The modified ChatMessage data with rollMode preferences applied\n */static applyRollMode(chatData:ConstructorDataType<foundry.data.ChatMessageData>,rollMode:foundry.CONST.DiceRollMode):ConstructorDataType<foundry.data.ChatMessageData>;/**\n * Update the data of a ChatMessage instance to apply a requested rollMode\n * @param rollMode - The rollMode preference to apply to this message data\n */\napplyRollMode(rollMode:foundry.CONST.DiceRollMode):void;/**\n * Attempt to determine who is the speaking character (and token) for a certain Chat Message\n * First assume that the currently controlled Token is the speaker\n *\n * @param scene - The Scene in which the speaker resides\n * @param actor - The Actor whom is speaking\n * @param token - The Token whom is speaking\n * @param alias - The name of the speaker to display\n *\n * @returns The identified speaker data\n */static getSpeaker({scene,actor,token,alias}?:{scene?:InstanceType<ConfiguredDocumentClass<typeof Scene>>;actor?:InstanceType<ConfiguredDocumentClass<typeof Actor>>;token?:InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>;alias?:string;}):foundry.data.ChatMessageData['speaker']['_source'];/**\n * A helper to prepare the speaker object based on a target TokenDocument\n *\n * @param token - The TokenDocument of the speaker\n * @param alias - The name of the speaker to display\n * @returns The identified speaker data\n */protected static _getSpeakerFromToken({token,alias}:{token:InstanceType<ConfiguredDocumentClass<typeof foundry.documents.BaseToken>>;alias:string;}):foundry.data.ChatMessageData['speaker']['_source'];/**\n * A helper to prepare the speaker object based on a target TokenDocument\n *\n * @param token - The TokenDocument of the speaker\n * @param alias - The name of the speaker to display\n * @returns The identified speaker data\n * @deprecated Passing a Token is deprecated, a TokenDocument should be passed instead\n */protected static _getSpeakerFromToken({token,alias}:{token:InstanceType<CONFIG['Token']['objectClass']>;alias:string;}):foundry.data.ChatMessageData['speaker']['_source'];/**\n * A helper to prepare the speaker object based on a target Actor\n *\n * @param scene - The Scene is which the speaker resides\n * @param actor - The Actor that is speaking\n * @param alias - The name of the speaker to display\n * @returns The identified speaker data\n */protected static _getSpeakerFromActor({scene,actor,alias}:{scene?:InstanceType<ConfiguredDocumentClass<typeof Scene>>;actor:InstanceType<ConfiguredDocumentClass<typeof Actor>>;alias?:string;}):foundry.data.ChatMessageData['speaker']['_source'];/**\n * A helper to prepare the speaker object based on a target User\n *\n * @param scene - The Scene in which the speaker resides\n * @param user  - The User who is speaking\n * @param alias - The name of the speaker to display\n * @returns The identified speaker data\n */protected static _getSpeakerFromUser({scene,user,alias}:{scene?:InstanceType<ConfiguredDocumentClass<typeof Scene>>;user:InstanceType<ConfiguredDocumentClass<typeof User>>;alias?:string;}):foundry.data.ChatMessageData['speaker']['_source'];/**\n * Obtain an Actor instance which represents the speaker of this message (if any)\n * @param speaker - The speaker data object\n */static getSpeakerActor(speaker:foundry.data.ChatMessageData['speaker']['_source']):Actor|null;/**\n * Obtain a data object used to evaluate any dice rolls associated with this particular chat message\n */\ngetRollData():InstanceType<ConfiguredDocumentClass<typeof Actor>>['getRollData']|{};/**\n * Given a string whisper target, return an Array of the user IDs which should be targeted for the whisper\n *\n * @param name - The target name of the whisper target\n * @returns An array of User instances\n */static getWhisperRecipients(name:string):StoredDocument<InstanceType<ConfiguredDocumentClass<typeof User>>>[];/**\n * Render the HTML for the ChatMessage which should be added to the log\n */\ngetHTML():Promise<JQuery>;/** @override */\n_preCreate(data:ConstructorDataType<foundry.data.ChatMessageData>,options:DocumentModificationOptions,user:foundry.documents.BaseUser):Promise<void>;/** @override */\n_onCreate(data:foundry.data.ChatMessageData['_source'],options:DocumentModificationOptions,userId:string):void;/** @override */\n_onUpdate(data:DeepPartial<foundry.data.ChatMessageData['_source']>,options:DocumentModificationOptions,userId:string):void;/** @override */\n_onDelete(options:DocumentModificationOptions,userId:string):void;/**\n * Export the content of the chat message into a standardized log format\n */export():string;}}export{};"
    ]
  