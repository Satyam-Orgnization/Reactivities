Steps to run locally:

Step 1: Clone the project 
Step 2: Open in VisualStudio 2024
Step 3: Configure startup project> select Multiple startup project
Step 4: Choose API and client-app action type-> Start
Step 5: run migration: dotnet ef database update 
Step 6: Add following data to DB:
  INSERT INTO [dbo].[Activities]([Id],[Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Past Activity 1', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())-2, -1), 'Activity 2 months ago', 'Drinks', 'London', 'Pub')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Past Activity 2', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())-1, -1), 'Activity 1 months ago', 'culture', 'Paris', 'Louvre')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 1', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+1, -1), 'Activity 1 month in future', 'culture', 'London', 'Natural History Museum')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 2', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+2, -1), 'Activity 2 months in future', 'music', 'London', 'O2 Arena')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 3', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+3, -1), 'Activity 3 months in future', 'Drinks', 'London', 'Another pub')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 4', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+4, -1), 'Activity 4 months in future', 'Drinks', 'London', 'Yet another pub')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 5', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+5, -1), 'Activity 5 months in future', 'Drinks', 'London', 'ust another pub')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 6', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+6, -1), 'Activity 6 months in future', 'music', 'London', 'Roundhouse Camden')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 7', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+7, -1), 'Activity 7months in future', 'travel', 'London', 'Somewhere on the Thames')
  INSERT INTO [dbo].[Activities]([Id], [Title], [Date], [Description], [Category], [City], [Venue])
  VALUES(NEWID(),'Future Activity 8', DATEADD(MONTH, DATEDIFF(MONTH, -1, GETDATE())+6, -1), 'Activity 8 months in future', 'film', 'London', 'Cinema')

Step 7: Select API project >right click> debug> Start New Instance
Step 8: Select client-app project >right click> debug> Start New Instance

go to   http://localhost:3000/




