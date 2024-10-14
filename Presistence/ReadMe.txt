add new migration:

dotnet ef migrations add InitialCreate -s "C:\Users\satya\source\repos\API" -p "C:\Users\satya\source\repos\Presistence"


remove migration:

dotnet ef migrations remove  -s "C:\Users\satya\source\repos\API" -p "C:\Users\satya\source\repos\Presistence"



Seeding activity data:


INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Past Activity 1', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())-2, -1), 'Activity 2 months ago', 'Drinks', 'London', 'Pub')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Past Activity 2', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())-1, -1), 'Activity 1 months ago', 'culture', 'Paris', 'Louvre')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 1', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+1, -1), 'Activity 1 month in future', 'culture', 'London', 'Natural History Museum')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 2', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+2, -1), 'Activity 2 months in future', 'music', 'London', 'O2 Arena')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 3', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+3, -1), 'Activity 3 months in future', 'Drinks', 'London', 'Another pub')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 4', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+4, -1), 'Activity 4 months in future', 'Drinks', 'London', 'Yet another pub')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 5', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+5, -1), 'Activity 5 months in future', 'Drinks', 'London', 'ust another pub')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 6', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+6, -1), 'Activity 6 months in future', 'music', 'London', 'Roundhouse Camden')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 7', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+7, -1), 'Activity 7months in future', 'travel', 'London', 'Somewhere on the Thames')
INSERT INTO [dbo].[Activities]([Title], [Date], [Description], [Category], [City], [Venue])
VALUES('Future Activity 8', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+6, -1), 'Activity 8 months in future', 'film', 'London', 'Cinema')

