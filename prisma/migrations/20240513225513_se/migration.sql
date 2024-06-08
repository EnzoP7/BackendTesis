/*
  Warnings:

  - Made the column `kilometros` on table `Vehiculo` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Vehiculo] ALTER COLUMN [kilometros] INT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
