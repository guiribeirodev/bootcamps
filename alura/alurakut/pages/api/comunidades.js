import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'c5cc8e0820bd3987f37fac70856157';
    const client = new SiteClient(TOKEN);

    //Validar os dados antes de cadastrar
    const registroCriado = await client.items.create({
      itemType: '972794', //Id do Model "Communities" que foi criado pelo Dato
      ...request.body
      // title: 'Comunidade de teste',
      // imgUrl: 'https://github.com/guiribeirodev.png',
      // creatorSlug: 'guiribeirodev'
    });

    response.json({
      dados: 'dado qualquer',
      registroCriado: registroCriado
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST têm'
  });
}
