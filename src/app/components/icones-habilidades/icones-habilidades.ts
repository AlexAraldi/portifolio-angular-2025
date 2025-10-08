import { Component } from '@angular/core';
import { IconeHabilidade } from '../../models/icone-habilidade';

@Component({
  selector: 'app-icones-habilidades',
  imports: [],
  templateUrl: './icones-habilidades.html',
})
export class IconesHabilidades {
  public iconeHabilidades: IconeHabilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS',
    },
    { imagem: 'https://skillicons.dev/icons?i=nodejs', titulo: 'Node.js' },
    {
      imagem: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=js&theme=dark',
      titulo: 'JavaScript',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
    },
    {
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
      titulo: 'ASP.NET Core',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=net&theme=dark',
      titulo: '.NET',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=selenium&theme=dark',
      titulo: 'Selenium',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=sqlite&theme=dark',
      titulo: 'SQLite',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=redis&theme=dark',
      titulo: 'Redis',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=powershell&theme=dark',
      titulo: 'PowerShell',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
    },
    { imagem: 'https://skillicons.dev/icons?i=postman', titulo: 'Postman' },
    {
      imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=visualstudio&theme=dark',
      titulo: 'Visual Studio',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
    },
    {
      imagem:
        'https://raw.githubusercontent.com/swagger-api/swagger-ui/master/dist/favicon-32x32.png',
      titulo: 'Swagger',
    },
    { imagem: 'https://cdn.simpleicons.org/jsonwebtokens?viewbox=auto', titulo: 'JWT' },
    { imagem: 'https://cdn.simpleicons.org/moq?viewbox=auto', titulo: 'MOQ' },
    { imagem: 'https://cdn.simpleicons.org/newrelic?viewbox=auto', titulo: 'New Relic' },
    { imagem: 'https://avatars.githubusercontent.com/u/890883?s=256', titulo: 'AutoMapper' },
    {
      imagem: 'https://github.com/FluentValidation/FluentValidation/raw/main/fv-small.png',
      titulo: 'FluentValidation',
    },
    {
      imagem: 'https://cdn.simpleicons.org/githubactions?viewbox=auto',
      titulo: 'GitHub Actions',
    },
  ];
}
