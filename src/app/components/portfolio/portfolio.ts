import { Component } from '@angular/core';
import { ItemPortfolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Medicamentos',
      descricao:
        'O Sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde.',
      urlImagem: 'https://i.imgur.com/vdeYeV6.png',
      urlGif: 'https://i.imgur.com/WrLEsbs.gif',
      urlRepositorio: 'https://github.com/AlexAraldi/Controle-de-Medicamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
    },
  ];
  public itemPortfolioSelecionado?: ItemPortfolio;
}
