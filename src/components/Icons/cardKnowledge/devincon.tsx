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


  interface IconNameColor {
    [key: string]: string
}
  export const DivIconsColor: IconNameColor = {
    React: '#1273DE', 
    Angular: '#de3b12', 
    Angularjs: '#de3b12', 
    Javascript: '#FCBD00', 
    Typescript: '#1273DE', 
    Sonarlint: '#c50101', 
    Jquery: '#FCBD00', 
    Html: '#de3b12',
    Css: '#128cde', 
    Swagger: '#069631',
    Csharp: '#8c12de',
    Dotnet: '#9312de',
    Ruby: '#d42b25', 
    Php: '#3e3cb3', 
    C: '#2b68ad', 
    Cplusplus: '#2b68ad', 
    Go: '#128cde', 
    Goland: '#128cde',
    Dart:'#128cde',
    Microsoftsqlserver: '#d42b25', 
    Sqlite: '#2b68ad', 
    Postgresql: '#2b68ad', 
    Mongodb: '#069631', 
    Redis: '#d42b25',
    Graphql: '#d46b25', 
    Postman: '#d42b25',
    Docker: '#2b68ad', 
    Kubernetes: '#2b68ad', 
    Amazonaws: '#d46b25', 
    Azuredevops: '#1273DE', 
    Jenkins: '#d42b25',
    default: '#1273DE'
  }