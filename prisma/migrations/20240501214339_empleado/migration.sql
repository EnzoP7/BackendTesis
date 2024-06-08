BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Empleado] (
    [id] INT NOT NULL IDENTITY(1,1),
    [cedula] INT NOT NULL,
    [nombre] NVARCHAR(1000) NOT NULL,
    [apellido] NVARCHAR(1000) NOT NULL,
    [sucursalId] INT NOT NULL,
    [rol] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Empleado_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Empleado_cedula_key] UNIQUE NONCLUSTERED ([cedula])
);

-- AddForeignKey
ALTER TABLE [dbo].[Empleado] ADD CONSTRAINT [Empleado_sucursalId_fkey] FOREIGN KEY ([sucursalId]) REFERENCES [dbo].[Sucursal]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
