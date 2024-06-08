/*
  Warnings:

  - Added the required column `combustibleSalida` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entregadoEmpleadoId` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaDeRegreso` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaDeSalida` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garantiaImporte` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garantiaMedio` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaDeRegreso` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaDeSalida` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kmSalida` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lugarDeSalida` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modoDePago` to the `Alquiler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioAlquiler` to the `Alquiler` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Alquiler] ADD [autorizadoExtendidoPorEmpleado_Id] INT,
[baliza] BIT NOT NULL CONSTRAINT [Alquiler_baliza_df] DEFAULT 1,
[botiquin] BIT NOT NULL CONSTRAINT [Alquiler_botiquin_df] DEFAULT 1,
[combustibleRegreso] NVARCHAR(1000),
[combustibleSalida] NVARCHAR(1000) NOT NULL,
[documentos] BIT NOT NULL CONSTRAINT [Alquiler_documentos_df] DEFAULT 1,
[entregadoEmpleadoId] INT NOT NULL,
[extendidoAl] DATETIME2,
[extintor] BIT NOT NULL CONSTRAINT [Alquiler_extintor_df] DEFAULT 1,
[factura] NVARCHAR(1000),
[fechaDeRegreso] DATETIME2 NOT NULL,
[fechaDeSalida] DATETIME2 NOT NULL,
[garantiaImporte] INT NOT NULL,
[garantiaMedio] NVARCHAR(1000) NOT NULL,
[gato_y_llave_de_rueda] BIT NOT NULL CONSTRAINT [Alquiler_gato_y_llave_de_rueda_df] DEFAULT 1,
[horaDeRegreso] DATETIME2 NOT NULL,
[horaDeSalida] DATETIME2 NOT NULL,
[kilometrosLibre] BIT NOT NULL CONSTRAINT [Alquiler_kilometrosLibre_df] DEFAULT 0,
[kmEntrada] INT,
[kmRecorridos] INT,
[kmSalida] INT NOT NULL,
[lugarDeRegreso] NVARCHAR(1000),
[lugarDeSalida] NVARCHAR(1000) NOT NULL,
[modoDePago] NVARCHAR(1000) NOT NULL,
[precioAlquiler] INT NOT NULL,
[recibidoEmpleadoId] INT,
[ruedaAuxiliar] BIT NOT NULL CONSTRAINT [Alquiler_ruedaAuxiliar_df] DEFAULT 1;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_autorizadoExtendidoPorEmpleado_Id_fkey] FOREIGN KEY ([autorizadoExtendidoPorEmpleado_Id]) REFERENCES [dbo].[Empleado]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_entregadoEmpleadoId_fkey] FOREIGN KEY ([entregadoEmpleadoId]) REFERENCES [dbo].[Empleado]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Alquiler] ADD CONSTRAINT [Alquiler_recibidoEmpleadoId_fkey] FOREIGN KEY ([recibidoEmpleadoId]) REFERENCES [dbo].[Empleado]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
