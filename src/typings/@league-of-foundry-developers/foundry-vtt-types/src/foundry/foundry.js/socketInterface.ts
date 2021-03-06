
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\socketInterface.d.ts",
      "declare class SocketInterface{/**\n * Standardize the way that socket messages are dispatched and their results are handled\n * @param eventName - The socket event name being handled\n * @param request   - Data provided to the Socket event\n * @returns A Promise which resolves to the SocketResponse\n */static dispatch(eventName:string,request:SocketInterface.Request):Promise<SocketInterface.Response>;/**\n * Handle an error returned from the database, displaying it on screen and in the console\n * @param err - The provided Error message\n */protected static _handleError(err:Error):Error;}declare namespace SocketInterface{namespace Requests{interface ModifyEmbeddedDocument{action:Action;data:any;options:any;parentId:string;parentType:string;type:string;}type Action='create'|'update'|'delete';}namespace Responses{interface ModifyEmbeddedDocument{request:Requests.ModifyEmbeddedDocument;result:any[];userId:string;}}type Request=Requests.ModifyEmbeddedDocument;type Response=Responses.ModifyEmbeddedDocument;}"
    ]
  