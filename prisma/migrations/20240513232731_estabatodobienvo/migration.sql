/*
  Warnings:

  - You are about to drop the column `kilometrosActuales` on the `Vehiculo` table. All the data in the column will be lost.
  - Added the required column `kilometros` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Vehiculo] DROP COLUMN [kilometrosActuales];
ALTER TABLE [dbo].[Vehiculo] ADD [kilometros] INT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
