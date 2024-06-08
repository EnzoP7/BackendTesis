/*
  Warnings:

  - A unique constraint covering the columns `[direccion]` on the table `Sucursal` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Sucursal] ADD CONSTRAINT [Sucursal_direccion_key] UNIQUE NONCLUSTERED ([direccion]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
