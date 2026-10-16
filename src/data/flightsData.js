export const flightsData = [
    { code: 'MTY', name: 'Monterrey - Aeropuerto Intl. Mariano Escobedo', city: 'Monterrey' },
    { code: 'PBC', name: 'Puebla - Aeropuerto Intl. Hermanos Serdán', city: 'Puebla' },
    { code: 'VER', name: 'Veracruz - Aeropuerto Intl. General Heriberto Jara', city: 'Veracruz' },
    { code: 'GDL', name: 'Guadalajara - Aeropuerto Intl. Don Miguel Hidalgo y Costilla', city: 'Guadalajara' },
    { code: 'CHP', name: 'Chiapas - Aeropuerto Intl. Ángel Albino Corzo', city: 'Chiapas' },
    { code: 'MEX', name: 'Ciudad de México - Aeropuerto Intl. Benito Juárez', city: 'Ciudad de México' },
    { code: 'NLU', name: 'Santa Lucía - Aeropuerto Internacional Felipe Ángeles', city: 'Santa Lucía' }
]

export const FLIGHTS_CATALOG = [
    {
        id: 'VB001',
        flightNumber: 'VB001',
        origin: 'MTY',
        destination: 'MEX',
        departureTime: '06:15',
        arrivalTime: '07:30',
        duration: '2h 20m',
        basePrice: 1250,
        seatsAvailable: 8,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB002',
        flightNumber: 'VB002',
        origin: 'MEX',
        destination: 'MTY',
        departureTime: '08:10',
        arrivalTime: '09:35',
        duration: '1h 25m',
        basePrice: 1380,
        seatsAvailable: 12,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB003',
        flightNumber: 'VB003',
        origin: 'MTY',
        destination: 'GDL',
        departureTime: '09:20',
        arrivalTime: '10:50',
        duration: '1h 30m',
        basePrice: 1120,
        seatsAvailable: 6,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB004',
        flightNumber: 'VB004',
        origin: 'GDL',
        destination: 'PBC',
        departureTime: '11:00',
        arrivalTime: '12:25',
        duration: '1h 25m',
        basePrice: 1260,
        seatsAvailable: 10,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB005',
        flightNumber: 'VB005',
        origin: 'PBC',
        destination: 'VER',
        departureTime: '12:40',
        arrivalTime: '13:35',
        duration: '55m',
        basePrice: 890,
        seatsAvailable: 9,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB006',
        flightNumber: 'VB006',
        origin: 'VER',
        destination: 'CHP',
        departureTime: '14:15',
        arrivalTime: '15:35',
        duration: '1h 20m',
        basePrice: 1050,
        seatsAvailable: 7,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB007',
        flightNumber: 'VB007',
        origin: 'CHP',
        destination: 'NLU',
        departureTime: '16:00',
        arrivalTime: '17:40',
        duration: '1h 40m',
        basePrice: 1190,
        seatsAvailable: 11,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    },
    {
        id: 'VB008',
        flightNumber: 'VB008',
        origin: 'NLU',
        destination: 'GDL',
        departureTime: '18:20',
        arrivalTime: '19:45',
        duration: '1h 25m',
        basePrice: 1320,
        seatsAvailable: 5,
        stops: 'Directo',
        airline: 'Aerolíneas Angelicales'
    }
]

export const TARIFF_TYPES = {
    ZERO: { name: 'Zero', multiplier: 1.0, baggage: 'Solo objeto personal (mochila)' },
    LIGHT: { name: 'Light', multiplier: 1.25, baggage: 'Objeto personal + Maleta de mano 10kg' },
    EXTRA: { name: 'Smart', multiplier: 1.60, baggage: 'Mano 10kg + Equipaje documentado 25kg + Asiento VIP' }
};