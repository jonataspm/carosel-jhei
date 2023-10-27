import React from 'react';
import { IconType } from 'react-icons';
import 
{ 
    SiReact, SiAngular, SiAngularjs, SiJavascript, SiTypescript, SiSonarlint, SiJquery, SiHtml5, SiCss3, SiSwagger,
    SiCsharp, SiDotnet ,SiRuby, SiPhp, SiC, SiCplusplus, SiGo, SiGoland, SiDart,
    SiMicrosoftsqlserver, SiSqlite, SiPostgresql, SiMongodb, SiRedis,
    SiGraphql, SiPostman,
    SiDocker, SiKubernetes, SiAmazonaws, SiAzuredevops, SiJenkins,
} from "react-icons/si";
import { FaQuestionCircle } from 'react-icons/fa';


interface IconName {
    [key: string]: IconType
}
  
export const DivIcons: IconName = {
    React: SiReact, 
    Angular: SiAngular, 
    Angularjs: SiAngularjs, 
    Javascript: SiJavascript, 
    Typescript: SiTypescript, 
    Sonarlint: SiSonarlint, 
    Jquery: SiJquery, 
    Html: SiHtml5,
    Css: SiCss3, 
    Swagger: SiSwagger,
    Csharp: SiCsharp,
    Dotnet: SiDotnet,
    Ruby: SiRuby, 
    Php: SiPhp, 
    C: SiC, 
    Cplusplus: SiCplusplus, 
    Go: SiGo, 
    Goland: SiGoland,
    Dart:SiDart,
    Microsoftsqlserver: SiMicrosoftsqlserver, 
    Sqlite: SiSqlite, 
    Postgresql: SiPostgresql, 
    Mongodb: SiMongodb, 
    Redis: SiRedis,
    Graphql: SiGraphql, 
    Postman: SiPostman,
    Docker: SiDocker, 
    Kubernetes: SiKubernetes, 
    Amazonaws: SiAmazonaws, 
    Azuredevops: SiAzuredevops, 
    Jenkins: SiJenkins,
    default: FaQuestionCircle
  }