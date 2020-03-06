import { Injectable } from "@nestjs/common";

export class EntityMetadataService {

    private static _instance:EntityMetadataService;
    public scopes: {tableName: string, type: string, scopes: Set<string>}[] = [];

    private constructor(){}

    static get Instance(){
        if (!EntityMetadataService._instance) EntityMetadataService._instance = new EntityMetadataService();
        return EntityMetadataService._instance;
    }

    public addTableScope(tableName:string, type:string, scopes: string[]){
      const scopeItem = this.scopes.find(s => s.tableName == tableName && s.type == type);
      if (scopeItem != null){
        if (!scopeItem.scopes) scopeItem.scopes = new Set();
        scopes.forEach(s => scopeItem.scopes.add(s))
      }else{
        const newItem = {tableName: tableName, type: type, scopes: new Set<string>()};
        scopes.forEach(s => newItem.scopes.add(s))
        this.scopes.push(newItem);
      }
    }

    public getScopes(){
        return this.scopes;
    }



}