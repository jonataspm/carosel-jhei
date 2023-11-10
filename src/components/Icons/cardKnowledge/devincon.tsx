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
    JavaScript: SiJavascript, 
    TypeScript: SiTypescript, 
    Sonarlint: SiSonarlint, 
    Jquery: SiJquery, 
    HTML: SiHtml5,
    CSS: SiCss3, 
    Swagger: SiSwagger,
    'C#': SiCsharp,
    Dotnet: SiDotnet,
    Ruby: SiRuby, 
    PHP: SiPhp, 
    C: SiC, 
    'C++': SiCplusplus, 
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
    default: FaQuestionCircle,
    CMake: FaQuestionCircle,
    Swift: FaQuestionCircle,
    Kotlin: FaQuestionCircle
  }


  interface IconNameColor {
    [key: string]: string
}
  export const DivIconsColor: IconNameColor = {
    React: '#1273DE', 
    Angular: '#de3b12', 
    Angularjs: '#de3b12', 
    JavaScript: '#FCBD00', 
    TypeScript: '#1273DE', 
    SonarLint: '#c50101', 
    Jquery: '#FCBD00', 
    HTML: '#de3b12',
    CSS: '#128cde', 
    Swagger: '#069631',
    'C#': '#8c12de',
    Dotnet: '#9312de',
    Ruby: '#d42b25', 
    PHP: '#3e3cb3', 
    C: '#2b68ad', 
    'C++': '#2b68ad', 
    Go: '#128cde', 
    Goland: '#128cde',
    Dart:'#128cde',
    Microsoftsqlserver: '#d42b25', 
    Sqlite: '#2b68ad', 
    PostgreSql: '#2b68ad', 
    Mongodb: '#069631', 
    Redis: '#d42b25',
    GraphQl: '#d46b25', 
    Postman: '#d42b25',
    Docker: '#2b68ad', 
    Kubernetes: '#2b68ad', 
    Amazonaws: '#d46b25', 
    Azuredevops: '#1273DE', 
    Jenkins: '#d42b25',
    default: '#1273DE'
  }