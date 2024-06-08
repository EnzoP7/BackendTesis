BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Vehiculo] DROP CONSTRAINT [Vehiculo_codigoNacional_key];

-- DropIndex
ALTER TABLE [dbo].[Vehiculo] DROP CONSTRAINT [Vehiculo_divNum_key];

-- DropIndex
ALTER TABLE [dbo].[Vehiculo] DROP CONSTRAINT [Vehiculo_matricula_key];

-- DropIndex
ALTER TABLE [dbo].[Vehiculo] DROP CONSTRAINT [Vehiculo_padron_key];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
