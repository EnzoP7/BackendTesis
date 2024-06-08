/*
  Warnings:

  - You are about to drop the column `ArrendatarioId` on the `Alquiler` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Alquiler] DROP CONSTRAINT [Alquiler_ArrendatarioId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Alquiler] DROP COLUMN [ArrendatarioId];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
