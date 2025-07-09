import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Badge } from '../../../components/ui/badge';
import { FileTextIcon, DownloadIcon } from 'lucide-react';

// Define data for menu items
const sidebarMenuItems = [
  { id: 1, name: 'Заявки', active: true },
  { id: 2, name: 'Черновики', active: false },
  { id: 3, name: 'Заемщики', active: false },
  { id: 4, name: 'Платежи', active: false },
  { id: 5, name: 'Отчеты', active: false },
  { id: 6, name: 'Настройки', active: false },
  { id: 7, name: 'Выход', active: false },
];

// Define data for borrowers table
const borrowers = [
  { id: 1, name: 'Клюжина Екатерина Петровна', birthDate: '07-11-1976', passport: '4566 454545' },
  { id: 2, name: 'Самсонов Артур Александрович', birthDate: '07-11-1976', passport: '4566 454545' },
  { id: 3, name: 'Самсонов Артур Александрович', birthDate: '07-11-1976', passport: '4566 454545' },
  { id: 4, name: 'Сверидов Пётр Анатольевич', birthDate: '22-08-1988', passport: '5667 675656' },
  { id: 5, name: 'Стаканов Павел Витальевич', birthDate: '04-02-1992', passport: '2344 654345' },
  { id: 6, name: 'Соболева Инга Геннадьевна', birthDate: '12-08-1987', passport: '2345 786574' },
  { id: 7, name: 'Сваровский Анатолий Сергеевич', birthDate: '07-11-1976', passport: '2344 456774' },
  { id: 8, name: 'Прохорова Седа Олеговна', birthDate: '04-02-1992', passport: '4324 453423' },
];

export const HeroSection = () => {
  return (
    <div
      className="flex flex-col h-[600px] items-start gap-[68px] p-[88px] relative w-full bg-gray-90 rounded-[32px] overflow-hidden">
      {/* Background vectors */}
      <img
        className="absolute w-[1121px] h-[1030px] top-[-41px] left-[348px]"
        alt="Vector"
        src="/img/vector-1-2.svg"
      />
      <img
        className="absolute w-[935px] h-[460px] top-[140px] left-44"
        alt="Vector"
        src="/img/vector-2-1.svg"
      />
      {/* Top navigation */}
      <div className="flex items-start justify-between relative self-stretch w-full">
        <Badge variant="outline" className="bg-[#725dd633] text-white px-5 py-2.5 rounded-[100px]">
          <span
            className="font-body-3-r text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)]">
            О продукте
          </span>
        </Badge>
        <div className="flex items-center gap-0.5">
          <Button variant="ghost" className="flex items-center gap-2 px-5 py-2.5 rounded-[100px] opacity-50 text-white">
            <FileTextIcon className="w-5 h-5" />
            <span
              className="font-body-3-r text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)]">
              Спецификация
            </span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ffffff0a] rounded-[100px] text-white"
          >
            <DownloadIcon className="w-5 h-5" />
            <span
              className="font-body-3-r text-[length:var(--body-3-r-font-size)] tracking-[var(--body-3-r-letter-spacing)] leading-[var(--body-3-r-line-height)]">
              Пробная версия
            </span>
          </Button>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col w-[644px] items-start gap-6">
        <h1
          className="self-stretch [font-family:'Geometria-Medium',Helvetica] font-medium text-white text-[68px] leading-[72px]">
          Микрофинансовое кредитование
        </h1>
        <p className="self-stretch opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-xl leading-7">
          Программа для автоматизации <br />
          всех бизнес-процессов МФО онлайн <br />и в точках продаж
        </p>
      </div>
      {/* Application mockup */}
      <Card
        className="flex w-[720px] items-start gap-2 p-2 absolute top-[168px] left-[804px] bg-[#e8e9ec] rounded-3xl overflow-hidden border-none">
        {/* Sidebar */}
        <div
          className="flex flex-col w-[163px] items-start justify-between p-3 self-stretch rounded-2xl [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
          <div className="flex flex-col items-start gap-5">
            {/* User profile */}
            <div className="flex w-[139px] h-9 items-center gap-4">
              <div
                className="w-9 h-9 rounded-xl [background:url(/img/frame-1948755011.png)_50%_50%_/_cover]" />
              <div className="flex flex-col items-start justify-center">
                <span
                  className="opacity-50 [font-family:'Inter',Helvetica] font-medium text-white text-[8px] leading-3 whitespace-nowrap">
                  ID 345567
                </span>
                <span
                  className="[font-family:'Inter',Helvetica] font-medium text-white text-[10px] leading-4 whitespace-nowrap">
                  Валентина
                </span>
              </div>
            </div>
            {/* Menu items */}
            <div className="flex flex-col w-[139px] items-start gap-2">
              {sidebarMenuItems.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-2 self-stretch w-full rounded-[100px] ${
                    item.active ? 'bg-[#ffffff14]' : 'opacity-50'
                  }`}
                >
                  <div className="w-2 h-2 bg-white rounded" />
                  <span
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}

              <img
                className="self-stretch w-full h-px"
                alt="Divider"
                src="/img/vector-128.svg"
              />
              {sidebarMenuItems.slice(2, 5).map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-2 self-stretch w-full rounded-[100px] ${
                    item.active ? 'bg-[#ffffff14]' : 'opacity-50'
                  }`}
                >
                  <div className="w-2 h-2 bg-white rounded" />
                  <span
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}

              <img
                className="self-stretch w-full h-px"
                alt="Divider"
                src="/img/vector-128.svg"
              />
              <div className="flex items-center gap-3 p-2 self-stretch w-full rounded-[100px] opacity-50">
                <div className="w-2 h-2 bg-white rounded" />
                <span
                  className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap">
                  {sidebarMenuItems[5].name}
                </span>
              </div>
            </div>
          </div>
          {/* Logout button */}
          <div className="flex items-center gap-3 p-2 self-stretch w-full rounded-[100px] opacity-50">
            <div className="w-2 h-2 bg-white rounded" />
            <span
              className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3 whitespace-nowrap">
              {sidebarMenuItems[6].name}
            </span>
          </div>
        </div>
        {/* Main content area */}
        <div className="flex flex-col items-start justify-center gap-2 flex-1">
          {/* Applications section */}
          <Card
            className="flex flex-col h-[148px] items-start gap-3 p-4 self-stretch w-full bg-white rounded-2xl border-none">
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <div className="flex items-center justify-center gap-4 self-stretch w-full">
                <h3
                  className="flex-1 [font-family:'Geometria-Bold',Helvetica] font-bold text-gray-90 text-base leading-6">
                  Заявки
                </h3>
                <Button
                  size="sm"
                  className="p-1.5 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]"
                >
                  <img className="w-3 h-3" alt="Plus" src="/img/plus.svg" />
                </Button>
              </div>
              {/* Form fields */}
              <div className="flex h-11 items-start gap-2 self-stretch w-full">
                <div className="flex flex-col items-start gap-1 flex-1">
                  <label className="[font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3">
                    Фамилия
                  </label>
                  <Input
                    className="h-7 px-2.5 py-2 bg-gray-10 rounded-lg text-[10px] leading-3"
                    defaultValue="Прохоров"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <label className="[font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3">
                    Имя
                  </label>
                  <Input
                    className="h-7 px-2.5 py-2 bg-gray-10 rounded-lg text-[10px] leading-3"
                    defaultValue="Виталий"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <label className="[font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3">
                    Отчество
                  </label>
                  <Input
                    className="h-7 px-2.5 py-2 bg-gray-10 rounded-lg text-[10px] leading-3"
                    defaultValue="Сергеевич"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <label className="[font-family:'Inter',Helvetica] font-normal text-[#7a86a2] text-[10px] leading-3">
                    Телефон
                  </label>
                  <Input
                    className="h-7 px-2.5 py-2 bg-gray-10 rounded-lg text-[10px] leading-3"
                    defaultValue="+ 7 999 999 99 99"
                  />
                </div>
              </div>
            </div>
            <Button
              className="px-4 py-2 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]">
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] leading-3">
                Найти заёмщика
              </span>
            </Button>
          </Card>
          {/* Borrowers section */}
          <Card className="flex flex-col items-start gap-3 p-4 self-stretch w-full bg-white rounded-2xl border-none">
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <div className="flex items-center justify-center gap-4 self-stretch w-full">
                <h3
                  className="flex-1 [font-family:'Geometria-Bold',Helvetica] font-bold text-gray-90 text-base leading-6">
                  Заёмщики
                </h3>
                <Button
                  size="sm"
                  className="p-1.5 rounded-[100px] [background:linear-gradient(43deg,rgba(28,34,47,1)_0%,rgba(34,53,98,1)_100%)]"
                >
                  <img className="w-3 h-3" alt="Plus" src="/img/plus.svg" />
                </Button>
              </div>
              {/* Borrowers table */}
              <div className="w-full border border-solid border-[#e3e4e7] rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-gray-10">
                    <TableRow>
                      <TableHead
                        className="h-6 px-2 py-1.5 text-[#7a86a2] text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                        Клиент
                      </TableHead>
                      <TableHead
                        className="h-6 w-[141px] px-2 py-1.5 text-[#7a86a2] text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                        Дата рождения
                      </TableHead>
                      <TableHead
                        className="h-6 w-[141px] px-2 py-1.5 text-[#7a86a2] text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                        Паспорт
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {borrowers.map((borrower) => (
                      <TableRow key={borrower.id}>
                        <TableCell
                          className="p-2 text-gray-90 text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                          {borrower.name}
                        </TableCell>
                        <TableCell
                          className="w-[141px] p-2 text-gray-90 text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                          {borrower.birthDate}
                        </TableCell>
                        <TableCell
                          className="w-[141px] p-2 text-gray-90 text-[10px] leading-3 font-normal border-r border-b border-[#e3e4e7]">
                          {borrower.passport}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
)}
