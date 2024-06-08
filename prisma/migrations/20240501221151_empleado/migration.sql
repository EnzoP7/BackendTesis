BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Empleado] DROP CONSTRAINT [Empleado_sucursalId_fkey];

-- RedefineTables
BEGIN TRANSACTION;
ALTER TABLE [dbo].[Sucursal] DROP CONSTRAINT [Sucursal_direccion_key];
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'Sucursal'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_Sucursal] (
    [id] INT NOT NULL,
    [direccion] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Sucursal_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Sucursal_direccion_key] UNIQUE NONCLUSTERED ([direccion])
);
IF EXISTS(SELECT * FROM [dbo].[Sucursal])
    EXEC('INSERT INTO [dbo].[_prisma_new_Sucursal] ([direccion],[id]) SELECT [direccion],[id] FROM [dbo].[Sucursal] WITH (holdlock tablockx)');
DROP TABLE [dbo].[Sucursal];
EXEC SP_RENAME N'dbo._prisma_new_Sucursal', N'Sucursal';
COMMIT;

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
