import { format, isBefore, parse, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const dataAtual = new Date();

export const formatDate = (date: string) => {
    // const rawDay = date.getDate().toString();
    // const day = rawDay.length > 1 ? rawDay : "0" + rawDay;
  
    // const rawMonth = (date.getMonth() + 1).toString();
    // const month = rawMonth.length > 1 ? rawMonth : "0" + rawMonth;
  
    // const year = date.getFullYear();

    const data = new Date(date);

// Obtém o dia, mês e ano da data
  const day = data.getUTCDate();
  const month = data.getUTCMonth() + 1; 
  const year = data.getUTCFullYear();

  const diaFormatado = day.toString().padStart(2, '0');
  const mesFormatado = month.toString().padStart(2, '0');
  
    return `${diaFormatado}/${mesFormatado}/${year}`;
  };


export const hour = () => { 
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    return formattedTime
}

export function obterDiaDeHoje() {
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = String(dataAtual.getFullYear());
  return `${dia}/${mes}/${ano}`;
}


export function obterDiaDaSemana(data:string) {

  const date = parse(data, 'dd/MM/yyyy', new Date());

  const dataAtual = new Date();


  const dataLimite = subDays(dataAtual, 4);


  if (isBefore(date, dataLimite)) {
      return data; 
  } else {
      const diaDaSemana = format(date, 'EEEE', { locale: ptBR });
      return String(diaDaSemana);
  }
}
