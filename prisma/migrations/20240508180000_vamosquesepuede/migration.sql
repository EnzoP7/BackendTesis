BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Alquiler] ADD [ConductorAutorizado_YO_fiador_id] INT,
[ConductorAutorizado_fiadorId] INT;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_ConductorAutorizado_fiadorId_fkey] FOREIGN KEY ([ConductorAutorizado_fiadorId]) REFERENCES [dbo].[Cliente]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_ConductorAutorizado_YO_fiador_id_fkey] FOREIGN KEY ([ConductorAutorizado_YO_fiador_id]) REFERENCES [dbo].[Cliente]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
