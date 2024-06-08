BEGIN TRY

BEGIN TRAN;

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
