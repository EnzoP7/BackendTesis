/*
  Warnings:

  - You are about to drop the column `kilometros` on the `Vehiculo` table. All the data in the column will be lost.
  - Added the required column `kilometrosActuales` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Vehiculo] DROP COLUMN [kilometros];
ALTER TABLE [dbo].[Vehiculo] ADD [kilometrosActuales] INT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
