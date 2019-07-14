<img src="https://github.com/sfergusonATX/helix/raw/master/resources/icon.png?raw=true" alt="Helix" style="max-width:100%; float: left; padding-right: 50px; margin: 20px 0;" height="200" width="200">

# Helix

[![Build status](https://ci.appveyor.com/api/projects/status/uy3l50i1p1gxu1pe/branch/master?svg=true)](https://ci.appveyor.com/project/sfergusonATX/helix/branch/master)

A Customer management platform

> <sup>Helix is a set of microservices that facilitates common customer management tasks. The microservices expose a RESTful API that requires token-based header authentication. Each domain also supports handling events raised within the platform.</sup>
>
> <sup>Helix is built on ASP.NET Core 2.2 and WebAPI. It is deployed to Azure using Docker.
>
> <sup>Communication amongst microservices is achieved using a generic abstraction of an Event Bus. There are 2 implementations; RabbitMQ and Azure Service Bus. They can be toggled by way of configuration.</sup>
>
> <sup>A formal architectural diagram and documention coming soon.</sup>

<br />

<img src="https://github.com/sfergusonATX/helix/raw/master/resources/break.jpg?raw=true">

### Production Deployment

https://helix-prod.azurewebsites.net/

### Development Environment

While you do not need to reflect my exact development environment on your machine, it's sometimes useful to provide potential Helix developers with a list of the exact products and versions I currently use to develop this product:

<br />

Type | Version | Requires Local Setup?
--- | --- | --- 
Operating System | [Windows 10 Home](https://www.microsoft.com/en-us/windows) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/yes.png?raw=true" alt="Yes" height="20" width="20">
IDE | [Visual Studio Community 2017](https://visualstudio.microsoft.com/downloads/) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/yes.png?raw=true" alt="Yes" height="20" width="20">
Database | [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/yes.png?raw=true" alt="Yes" height="20" width="20">
Version Control (git client) | [TortoiseGit](https://tortoisegit.org/) or [GitKraken](https://www.gitkraken.com/download) or [Sourcetree](https://www.sourcetreeapp.com/) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/yes.png?raw=true" alt="Yes" height="20" width="20">
Continous Integration | [AppVeyor](https://ci.appveyor.com/projects) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/no.png?raw=true" alt="No" height="20" width="20">
Host | [Microsoft Azure](https://azure.microsoft.com/) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/no.png?raw=true" alt="No" height="20" width="20">
Containers | [Docker](https://www.docker.com/) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/no.png?raw=true" alt="No" height="20" width="20">
NuGet Deployment | [AppVeyor](https://ci.appveyor.com/projects) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/no.png?raw=true" alt="No" height="20" width="20">

<br />

### Package Sources

Here are the NuGet Package sources I have configured in Visual Studio and use to develop this product:

<br />

Name | Source | Required?
--- | --- | --- 
NuGet (v3) | [https://api.nuget.org/v3/index.json](https://api.nuget.org/v3/index.json) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/yes.png?raw=true" alt="Yes" height="20" width="20">
MyGet (Relay) | [https://www.myget.org/F/sfergusonATX/api/v2/](https://www.myget.org/F/sfergusonATX/api/v2/) | <img src="https://github.com/sfergusonATX/helix/raw/master/resources/no.png?raw=true" alt="No" height="20" width="20"> (pre-release only)

<br />

### Folder structure

The folder structure has a definite form, which should be mainained. The standard was derived by the great David Fowler [here](https://gist.github.com/davidfowl/ed7564297c61fe9ab814).

<br />

```
$/
  artifacts/
  build/
  docs/
  lib/
  packages/
  resources/
  samples/
  src/
  tests/
  .editorconfig
  .gitignore
  .gitattributes
  build.cmd
  build.sh
  LICENSE
  NuGet.Config
  README.md
  {solution}.sln
```

- `src` - Main projects (the product code)
- `tests` - Test projects
- `docs` - Documentation stuff, markdown files, help files etc.
- `samples` (optional) - Sample projects
- `lib` - Libraries that your application depends on, which you cannot obtian by way of NuGet
- `artifacts` - Build outputs go here. Doing a build.cmd/build.sh generates artifacts here (nupkgs, dlls, pdbs, etc.)
- `packages` - NuGet packages
- `resources` - Misc. files referenced by the application (NuGet package image, etc.)
- `build` - Build customizations (custom msbuild files/psake/fake/albacore/etc) scripts
- `build.cmd` - Bootstrap the build for windows
- `build.sh` - Bootstrap the build for *nix
- `global.json` - ASP.NET vNext only
