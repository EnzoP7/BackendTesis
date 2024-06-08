/*
  Warnings:

  - You are about to drop the `Alquiler` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[mail]` on the table `Empleado` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mail` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Empleado` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Alquiler] DROP CONSTRAINT [Alquiler_ArrendatarioId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Alquiler] DROP CONSTRAINT [Alquiler_ConductorAutorizado_fiadorId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Alquiler] DROP CONSTRAINT [Alquiler_vehiculoId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Empleado] ADD [mail] NVARCHAR(1000) NOT NULL,
[password] NVARCHAR(1000) NOT NULL;

-- DropTable
DROP TABLE [dbo].[Alquiler];

-- CreateIndex
ALTER TABLE [dbo].[Empleado] ADD CONSTRAINT [Empleado_mail_key] UNIQUE NONCLUSTERED ([mail]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
