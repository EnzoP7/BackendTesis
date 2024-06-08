BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Vehiculo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [matricula] NVARCHAR(1000) NOT NULL,
    [padron] NVARCHAR(1000) NOT NULL,
    [codigoNacional] INT NOT NULL,
    [divNum] INT NOT NULL,
    [marca] NVARCHAR(1000) NOT NULL,
    [modelo] NVARCHAR(1000) NOT NULL,
    [anio] INT NOT NULL,
    [color] NVARCHAR(1000) NOT NULL,
    [tipo] NVARCHAR(1000) NOT NULL,
    [combustible] NVARCHAR(1000) NOT NULL,
    [numeroMotor] NVARCHAR(1000),
    [numeroChasis] NVARCHAR(1000),
    [ciRut] NVARCHAR(1000),
    [empadronado] DATETIME2,
    [emitido] DATETIME2,
    CONSTRAINT [Vehiculo_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Vehiculo_matricula_key] UNIQUE NONCLUSTERED ([matricula]),
    CONSTRAINT [Vehiculo_padron_key] UNIQUE NONCLUSTERED ([padron]),
    CONSTRAINT [Vehiculo_codigoNacional_key] UNIQUE NONCLUSTERED ([codigoNacional]),
    CONSTRAINT [Vehiculo_divNum_key] UNIQUE NONCLUSTERED ([divNum])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
