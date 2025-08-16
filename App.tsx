
import React, { useState, useRef, useCallback } from 'react';
import { TicketForm } from './components/TicketForm';
import { TicketPreview } from './components/TicketPreview';
import type { TicketData } from './types';
import { INITIAL_TICKET_DATA } from './constants';
import { PrintIcon } from './components/icons';

const App: React.FC = () => {
  const [ticketData, setTicketData] = useState<TicketData>(INITIAL_TICKET_DATA);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleDataChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicketData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <header className="bg-white shadow-md print:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-700">EgyptAir E-Ticket Generator</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors"
          >
            <PrintIcon />
            Print / Save PDF
          </button>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 print:hidden">
            <TicketForm data={ticketData} onChange={handleDataChange} />
          </div>
          <div className="lg:col-span-3">
             <div className="bg-white p-4 shadow-lg rounded-lg print:shadow-none print:p-0">
               <TicketPreview data={ticketData} ref={ticketRef} />
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
