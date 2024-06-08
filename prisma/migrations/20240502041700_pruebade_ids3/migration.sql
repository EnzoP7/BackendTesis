/*
  Warnings:

  - Added the required column `ArrendatarioId` to the `Alquiler` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Alquiler] ADD [ArrendatarioId] INT NOT NULL,
[ConductorAutorizado_fiadorId] INT;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_ArrendatarioId_fkey] FOREIGN KEY ([ArrendatarioId]) REFERENCES [dbo].[Cliente]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_ConductorAutorizado_fiadorId_fkey] FOREIGN KEY ([ConductorAutorizado_fiadorId]) REFERENCES [dbo].[Cliente]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
