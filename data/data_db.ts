export const lasSucursales = [
    { id:1,direccion: 'Carmelo' },
    { id:2,direccion: 'Nueva Helvecia' },
    { id:3,direccion: 'Nueva Palmira' },
    { id:4,direccion: 'Montevideo' },
    { id:5,direccion: 'Cardona' },
  ];
  


  export const losClientes = [
    { 
      nombre: 'Juan',
      apellido1: 'Perez',
      apellido2: 'Gonzalez',
      domicilio: 'Av. Rivera 1234',
      ciudad: 'Montevideo',
      pais: 'Uruguay',
      licencia: 123456,
      licenciaEmitida: new Date('2023-01-15'),
      licenciaVencimiento: new Date('2025-01-15'),
      mail: 'juan.perez@example.com',
      telefono: 91234567,
      rut: '12345678-9',
      clienteValido: true
    },
    { 
      nombre: 'María',
      apellido1: 'Lopez',
      apellido2: 'Martinez',
      domicilio: 'Calle Uruguay 567',
      ciudad: 'Punta del Este',
      pais: 'Uruguay',
      licencia: 654321,
      licenciaEmitida: new Date('2022-11-10'),
      licenciaVencimiento: new Date('2024-11-10'),
      mail: 'maria.lopez@example.com',
      telefono: 99887766,
      rut: '98765432-1',
      clienteValido: true
    },
    { 
      nombre: 'Pedro',
      apellido1: 'Gomez',
      domicilio: 'Av. Artigas 789',
      ciudad: 'Salto',
      pais: 'Uruguay',
      licencia: 987654,
      licenciaEmitida: new Date('2023-05-20'),
      licenciaVencimiento: new Date('2025-05-20'),
      mail: 'pedro.gomez@example.com',
      telefono: 99887755,
      clienteValido: true
    },
    { 
      nombre: 'Ana',
      apellido1: 'Rodriguez',
      domicilio: 'Calle Tacuarembo 321',
      ciudad: 'Tacuarembó',
      pais: 'Uruguay',
      licencia: 456789,
      licenciaEmitida: new Date('2022-08-05'),
      licenciaVencimiento: new Date('2024-08-05'),
      mail: 'ana.rodriguez@example.com',
      telefono: 99887744,
      clienteValido: true
    },
    // Agrega aquí más registros de clientes si es necesario
  ];

  export const losVehiculos = [
    { 
      matricula: 'ABC123',
      padron: '456789',
      codigoNacional: 987654,
      divNum: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      kilometros:4500,
      anio: 2020,
      color: 'Negro',
      tipo: 'Sedan',
      combustible: 'nafta',
      numeroMotor: '1234567890',
      numeroChasis: '0987654321',
      ciRut: '12345678-9',
      empadronado: new Date('2023-05-20'),
      emitido: new Date('2020-06-15')
    },
    { 
      matricula: 'DEF456',
      padron: '987654',
      codigoNacional: 123456,
      divNum: 2,
      marca: 'Ford',
      modelo: 'Focus',
      anio: 2018,
      kilometros:4500,
      color: 'Azul',
      tipo: 'Hatchback',
      combustible: 'diesel',
      numeroMotor: '0987654321',
      numeroChasis: '1234567890',
      ciRut: '98765432-1',
      empadronado: new Date('2023-02-10'),
      emitido: new Date('2018-03-20')
    },
    { 
      matricula: 'GHI789',
      padron: '654321',
      codigoNacional: 789012,
      kilometros:4500,
      divNum: 3,
      marca: 'Chevrolet',
      modelo: 'Cruze',
      anio: 2019,
      color: 'Blanco',
      tipo: 'Sedan',
      combustible: 'nafta',
      numeroMotor: '9876543210',
      numeroChasis: '0123456789',
      ciRut: '45678901-2',
      empadronado: new Date('2023-08-15'),
      emitido: new Date('2019-09-25')
    },
    { 
      matricula: 'JKL012',
      padron: '321654',
      codigoNacional: 890123,
      divNum: 4,
      marca: 'Volkswagen',
      modelo: 'Golf',
      kilometros:4500,
      anio: 2021,
      color: 'Gris',
      tipo: 'Hatchback',
      combustible: 'nafta',
      numeroMotor: '8765432109',
      numeroChasis: '9876543210',
      ciRut: '23456789-0',
      empadronado: new Date('2023-11-30'),
      emitido: new Date('2021-01-10')
    },
    { 
      matricula: 'MNO345',
      padron: '789012',
      codigoNacional: 901234,
      divNum: 5,
      marca: 'Honda',
      modelo: 'Civic',
      anio: 2022,
      color: 'Rojo',
      kilometros:4500,
      tipo: 'Sedan',
      combustible: 'nafta',
      numeroMotor: '7654321098',
      numeroChasis: '8901234567',
      ciRut: '34567890-1',
      empadronado: new Date('2024-03-25'),
      emitido: new Date('2022-04-05')
    },
    // Agrega aquí más registros de vehículos si es necesario
  ];


  export const losEmpleados = [
    {
      
      cedula: 12345678,
      nombre: 'Eduardo',
      apellido: 'González',
      sucursalId: 1,
      rol: 'encargado'
    },
    {
      
      cedula: 23456789,
      nombre: 'María',
      apellido: 'López',
      sucursalId: 2,
      rol: 'empleado'
    },
    {
      
      cedula: 34567890,
      nombre: 'Juan',
      apellido: 'Martínez',
      sucursalId: 3,
      rol: 'empleado'
    },
    {
    
      cedula: 45678901,
      nombre: 'Ana',
      apellido: 'Rodríguez',
      sucursalId: 4,
      rol: 'encargado'
    },
    {
     
      cedula: 56789012,
      nombre: 'Pedro',
      apellido: 'Sánchez',
      sucursalId: 5,
      rol: 'empleado'
    },
    // Agrega más datos de empleados aquí si es necesario
  ];
  