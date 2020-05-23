module.exports = ({ 
    os,
    nameUni,
    adress,
    city,
    cep,
    uf,
    userName,
    userLocal,
    fone,
    email,
    printModel,
    ns,
    pagCount,
    ip,
    mask,
    gateway,
    description,
    dataAtend,
    timeCheg,
    timeStart,
    timeFinish,
    timeOut,
    nameTec,
    nameUserAssinatura
}) => {
  const today = new Date();
return `
<!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>RAT Manual PDF</title>
        <style>
           p {
           }
           .invoice-box {
           max-width: 800px;
           margin: auto;
           padding: 10px;
           border: 1px solid #eee;
           box-shadow: 0 0 10px rgba(0, 0, 0, .15);
           font-size: 11px;
           line-height: 14px;
           font-family: 'Helvetica Neue', 'Helvetica',
           color: #555;
           }
           .margin-top {
           margin-top: 50px;
           }
           .justify-center {
           text-align: center;
           }
           .invoice-box table {
           width: 100%;
           line-height: inherit;
           text-align: left;
           }
           .invoice-box table td {
           padding: 5px;
           vertical-align: top;
           }
           .invoice-box table tr td:nth-child(2) {
           text-align: left;
           }
           .invoice-box table tr.top table td {
           padding-bottom: 10px;
           }
           .invoice-box table tr.top table td.title {
           font-size: 11px;
           line-height: 12px;
           color: #333;
           }
           .invoice-box table tr.information table td {
           padding-bottom: 20px;
           }
           .invoice-box table tr.heading td {
           background: #eee;
           border-bottom: 1px solid #ddd;
           font-weight: bold;
           font-size: 11px;
           line-height: 12px;
           }
           .invoice-box table tr.details td {
           padding-bottom: 15px;
           }
           .invoice-box table tr.item td {
           border-bottom: 1px solid #eee;
           }
           .invoice-box table tr.item.last td {
           border-bottom: none;
           }
           
           @media only screen and (max-width: 600px) {
           .invoice-box table tr.top table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           .invoice-box table tr.information table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           }
        </style>
     </head>
     <body>
        <div class="invoice-box">
           <table cellpadding="0" cellspacing="0">
              <tr class="top">
                 <td colspan="2">
                    <table>
                       <tr>
                          <td>
                            <h4>RELATÓRIO DE MANUTENÇÃO</h4> <H2>OS: ${os}</H2>
                          </td>
                          <td class="title"><img src="https://i.ibb.co/dt7Z28c/logo2.png" alt="logo2" border="0"></td>
                       </tr>
                    </table>
                 </td>
              </tr>
           </table>
           
           <div>
             <table cellpadding="0" cellspacing="0">
                <tr class="heading">
                   <td>DADOS DO PROJETO</td>
                   <td></td>
                </tr>
              </table>
            </div>

            <div>
              <table>
                <td>
                  <p><b>Nome da Unidade:</b> ${nameUni}</p>
                </td>
              </table>
            </div>

            <div>
             <table cellpadding="0" cellspacing="0">
                <tr class="item">
                   <td><b>Endereço:</b> ${adress}</td>
                   <td><b>CEP:</b> ${cep}</td>
                </tr>
                <tr class="item">
                   <td><b>Cidade:</b> ${city}</td>
                   <td><b>UF: </b>${uf}</td>
                </tr>
                <tr class="item">
                   <td><b>Nome do Contato:</b> ${userName}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td><b>Departamento/Cargo:</b> ${userLocal}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td><b>Telefone/Fax:</b> ${fone}</td>
                   <td><b>E-mail:</b> ${email}</td>
                </tr>
                
                <tr class="heading" >
                   <td>DADOS DA IMPRESSORA</td>
                   <td></td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <td>
                  <p><b>N° Série:</b> ${ns} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Contador de Pág:</b> ${pagCount}</p>
                </td>
              </table>
            </div>
            
            <div>
             <table cellpadding="0" cellspacing="0">
                <tr class="item">
                   <td><b>Modelo:</b> ${printModel}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td><b>IP:</b> ${ip}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td><b>Máscara de rede:</b> ${mask}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td><b>Gateway:</b> ${gateway}</td>
                   <td></td>
                </tr>
                <tr class="heading">
                  <td  >RESUMO DOS SERVIÇOS EXECUTADOS</td>
                  <td></td>
                </tr>
             </table>
            </div>

            <div class="description">
              <table>
                <td>
                  <p>${description}</p>
                </td>
              </table>
            </div>
              
            <table cellpadding="0" cellspacing="0">
              </tr>
              <tr class="heading">
                  <td>VALIDAÇÃO DO ATENDIMENTO</td>
                  <td></td>
               </tr>
               <tr class="item">
                 <td><b>Data de Atendimento:</b> ${dataAtend}</td>
                 <td></td>
              </tr>
              <tr class="item">
                 <td>Hora de Chegada: ${timeCheg}</td>
                 <td>Hora de Início: ${timeStart}</td>
              </tr>
              <tr class="item">
                 <td>Hora de Conclusão: ${timeFinish}</td>
                 <td>Hora de Saída: ${timeOut}</td>
              </tr>
              <tr class="item">
                 <td><b>Nome do Técnico:</b> ${nameTec}</td>
                 <td></td>
              </tr>
              <tr>
                <td><b>Nome do Usuário(a) Local:</b> ${nameUserAssinatura}</td>
                 <td></td>
              </tr>
              <tr>
                <td><b>Assinatura + Carimbo do Usuário(a) do Local:</b></td>
                <td></td>
              </tr>
            </table>
        </div>
     </body>
  </html>


  `;
};