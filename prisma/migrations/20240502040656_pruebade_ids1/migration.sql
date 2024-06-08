BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Cliente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [apellido1] NVARCHAR(1000) NOT NULL,
    [apellido2] NVARCHAR(1000),
    [domicilio] NVARCHAR(1000) NOT NULL,
    [ciudad] NVARCHAR(1000) NOT NULL,
    [pais] NVARCHAR(1000) NOT NULL,
    [licencia] INT NOT NULL,
    [licenciaEmitida] DATETIME2 NOT NULL,
    [licenciaVencimiento] DATETIME2 NOT NULL,
    [mail] NVARCHAR(1000),
    [telefono] INT,
    [rut] NVARCHAR(1000),
    [clienteValido] BIT CONSTRAINT [Cliente_clienteValido_df] DEFAULT 1,
    CONSTRAINT [Cliente_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Cliente_licencia_key] UNIQUE NONCLUSTERED ([licencia]),
    CONSTRAINT [Cliente_mail_key] UNIQUE NONCLUSTERED ([mail]),
    CONSTRAINT [Cliente_telefono_key] UNIQUE NONCLUSTERED ([telefono]),
    CONSTRAINT [Cliente_nombre_apellido1_apellido2_key] UNIQUE NONCLUSTERED ([nombre],[apellido1],[apellido2])
);

-- CreateTable
CREATE TABLE [dbo].[Alquiler] (
    [id] INT NOT NULL IDENTITY(1,1),
    [vehiculoId] INT NOT NULL,
    CONSTRAINT [Alquiler_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_vehiculoId_fkey] FOREIGN KEY ([vehiculoId]) REFERENCES [dbo].[Vehiculo]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
