import path from 'path';
import crypto from 'crypto';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { resolver } from 'graphql-sequelize';
import { 
  buildSchema,
  GraphQLList,
  GraphQLSchema, 
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';
import CustomGraphQLDateType from 'graphql-custom-datetype';
import { Sequelize } from 'sequelize';
import * as dbconfig from './startup/server/database';

// database wide options
const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    // dialectOptions: dbconfig.dialectOptions,
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};
db.analysis = sequelize.import(path.join(__dirname, '/startup/server/models/Analysis'));
db.bestPartialTime = sequelize.import(path.join(__dirname, '/startup/server/models/BestPartialTime'));
db.calendarEvent = sequelize.import(path.join(__dirname, '/startup/server/models/CalendarEvent'));
db.car = sequelize.import(path.join(__dirname, '/startup/server/models/Car'));
db.championship = sequelize.import(path.join(__dirname, '/startup/server/models/Championship'));
db.championshipRules = sequelize.import(path.join(__dirname, '/startup/server/models/ChampionshipRules'));
db.champTypeHTML = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypeHTML'));
db.champTypeOutput = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypeOutput'));
db.champTypePast = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypePast'));
db.champTypePoints = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypePoints'));
db.champTypePrintOuts = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypePrintOuts'));
db.champTypeStanding = sequelize.import(path.join(__dirname, '/startup/server/models/ChampTypeStanding'));
db.checkValue = sequelize.import(path.join(__dirname, '/startup/server/models/CheckValue'));
db.clockEvent = sequelize.import(path.join(__dirname, '/startup/server/models/ClockEvent'));
db.competitors = sequelize.import(path.join(__dirname, '/startup/server/models/Competitors'));
db.currentSeason = sequelize.import(path.join(__dirname, '/startup/server/models/CurrentSeason'));
db.deviceDriver = sequelize.import(path.join(__dirname, '/startup/server/models/DeviceDriver'));
db.devices = sequelize.import(path.join(__dirname, '/startup/server/models/Devices'));
db.dictionary = sequelize.import(path.join(__dirname, '/startup/server/models/Dictionary'));
db.dictionaryHtml = sequelize.import(path.join(__dirname, '/startup/server/models/DictionaryHtml'));
db.driver = sequelize.import(path.join(__dirname, '/startup/server/models/Driver'));
db.emett = sequelize.import(path.join(__dirname, '/startup/server/models/Emett'));
db.entryChampionship = sequelize.import(path.join(__dirname, '/startup/server/models/EntryChampionship'));
db.entryEmett = sequelize.import(path.join(__dirname, '/startup/server/models/EntryEmett'));
db.entryEvent = sequelize.import(path.join(__dirname, '/startup/server/models/EntryEvent'));
db.entrySession = sequelize.import(path.join(__dirname, '/startup/server/models/EntrySession'));
db.event = sequelize.import(path.join(__dirname, '/startup/server/models/Event'));
db.givenPoints = sequelize.import(path.join(__dirname, '/startup/server/models/GivenPoints'));
db.grid = sequelize.import(path.join(__dirname, '/startup/server/models/Grid'));
db.incident = sequelize.import(path.join(__dirname, '/startup/server/models/Incident'));
db.incWeather = sequelize.import(path.join(__dirname, '/startup/server/models/IncWeather'));
db.IRTATeams = sequelize.import(path.join(__dirname, '/startup/server/models/IRTATeams'));
db.lapChart = sequelize.import(path.join(__dirname, '/startup/server/models/LapChart'));
db.lapChartIP = sequelize.import(path.join(__dirname, '/startup/server/models/LapChartIP'));
db.monitorInformation = sequelize.import(path.join(__dirname, '/startup/server/models/MonitorInformation'));
db.newPostCorrespondency = sequelize.import(path.join(__dirname, '/startup/server/models/NewPostCorrespondency'));
db.nation = sequelize.import(path.join(__dirname, '/startup/server/models/Nation'));
db.outputExclusions = sequelize.import(path.join(__dirname, '/startup/server/models/OutputExclusions'));
db.pastResult = sequelize.import(path.join(__dirname, '/startup/server/models/PastResult'));
db.points = sequelize.import(path.join(__dirname, '/startup/server/models/Points'));
db.post = sequelize.import(path.join(__dirname, '/startup/server/models/Post'));
db.postDevices = sequelize.import(path.join(__dirname, '/startup/server/models/PostDevices'));
db.preGridConfig = sequelize.import(path.join(__dirname, '/startup/server/models/PreGridConfig'));
db.preGridSources = sequelize.import(path.join(__dirname, '/startup/server/models/PreGridSources'));
db.printQueue = sequelize.import(path.join(__dirname, '/startup/server/models/PrintQueue'));
db.RDSPrinterSettings = sequelize.import(path.join(__dirname, '/startup/server/models/RDSPrinterSettings'));
db.RDSQueue = sequelize.import(path.join(__dirname, '/startup/server/models/RDSQueue'));
db.RDSQueueSubscriptions = sequelize.import(path.join(__dirname, '/startup/server/models/RDSQueueSubscriptions'));
db.RDSRecipients = sequelize.import(path.join(__dirname, '/startup/server/models/RDSRecipients'));
db.RDSSubscriptions = sequelize.import(path.join(__dirname, '/startup/server/models/RDSSubscriptions'));
db.session = sequelize.import(path.join(__dirname, '/startup/server/models/Session'));
db.sessionCowntDown = sequelize.import(path.join(__dirname, '/startup/server/models/SessionCowntDown'));
db.sessionName = sequelize.import(path.join(__dirname, '/startup/server/models/SessionName'));
db.sessionPenalties = sequelize.import(path.join(__dirname, '/startup/server/models/SessionPenalties'));
db.sessionPost = sequelize.import(path.join(__dirname, '/startup/server/models/SessionPost'));
db.standingIRTARanking = sequelize.import(path.join(__dirname, '/startup/server/models/StandingIRTARanking'));
db.standings = sequelize.import(path.join(__dirname, '/startup/server/models/Standings'));
db.standingsTime = sequelize.import(path.join(__dirname, '/startup/server/models/StandingsTime'));
db.standingsTimeNeutralized = sequelize.import(path.join(__dirname, '/startup/server/models/StandingsTimeNeutralized'));
db.teams = sequelize.import(path.join(__dirname, '/startup/server/models/Teams'));
db.track = sequelize.import(path.join(__dirname, '/startup/server/models/Track'));
db.trackCamera = sequelize.import(path.join(__dirname, '/startup/server/models/TrackCamera'));
db.trackData = sequelize.import(path.join(__dirname, '/startup/server/models/TrackData'));
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.emett.belongsTo(db.deviceDriver, {
  foreignKey: 'DeviceDriverId',
  constraints: false,
  // as: 'DeviceDriver',
});

// ANALYSIS QUERY
/*
db.analysis.findAll({
  where: {
    ChampId: 3,
  },
}).then(analysis =>
  analysis.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// BEST PARTIAL TIME QUERY
/*
db.bestPartialTime.findAll({
  where: {
    ChampId: 3,
  },
}).then(bestPartialTime =>
  bestPartialTime.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CALENDAR EVENT QUERY
/*
db.calendarEvent.findAll().then(calendarEvent =>
  calendarEvent.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));HTML
  }),
);
*/

// CAR QUERY
/*
db.car.findAll().then(car =>
CheckValue  car.forEach((itemChampTypeStanding) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMPSIONSHIP QUERY
/*
db.championship.findAll().then(championship =>
  championship.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
CheckValue*/

// CHAMPSIONSHIP RULES QUERY
/*
db.championshipRules.findAll().then(championshipRules =>
  championshipRules.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMP TYPE HTML QUERY
/*
db.champTypeHTML.findAll().then(champTypeHTML =>
CheckValue  champTypeHTML.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),ChampTypeStanding
);
*/

// CHAMP TYPE OUTPUT QUERY
/*
db.champTypeOutput.findAll().then(champTypeOutput =>
  champTypeOutput.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMP TYPE PAST QUERY
/*
db.champTypePast.findAll().then(champTypePast =>
  champTypePast.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMP TYPE POINTS QUERY
/*
db.champTypePoints.findAll().then(champTypePoints =>
  champTypePoints.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMP TYPE PRINT OUTS QUERY
/*
dCheckValueb.champTypePrintOuts.findAll().then(champTypePrintOuts =>
  champTypePrintOuts.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHAMP TYPE STANDING QUERY
/*
db.champTypeStanding.findAll().then(champTypeStanding =>
  champTypeStanding.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CHECK VALUE QUERY
/*
db.checkValue.findAll().then(checkValue =>
  checkValue.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CLOCK EVENT QUERY
/*
db.clockEvent.findAll().then(clockEvent =>
  clockEvent.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// COMPETITORS QUERY
/*
db.competitors.findAll().then(competitors =>
  competitors.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// CURRENT SEASON QUERY
/*
db.currentSeason.findAll().then(currentSeason =>
  currentSeason.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// DEVICES DRIVER QUERY
/*
db.deviceDriver.findAll().then(deviceDrivers =>
  deviceDrivers.forEach((deviceDriver) => {
    console.log(deviceDriver.get({
      plain: true,
    }));
  }),
);
*/

// DEVICES QUERY
/*
db.devices.findAll().then(devices =>
  devices.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// DICTIONARY QUERY/*
/*
db.dictionary.findAll().then(dictionary =>
  dictionary.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// DICTIONARY HTML QUERY
/*
db.dictionaryHtml.findAll().then(dictionaryHtml =>
  dictionaryHtml.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// DRIVER QUERY
/*
db.driver.findAll().then(driver =>
  driver.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// EMETT QUERY
/*
db.emett.findAll({
  include: [{
    model: db.deviceDriver,
  }],
}).then(emetts =>
  emetts.forEach((emett) => {
    console.log(emett.get({
      plain: true,
    }));
  }),
);
*/

// ENTRY CHAMPIONSHIP QUERY
/*
db.entryChampionship.findAll({
  where: {
    ChampId: 3,
  },
}).then(entryChamp =>
  entryChamp.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// ENTRY EMETT QUERY
/*
db.entryEmett.findAll({
  where: {
    ChampId: 3,
  },
}).then(entryChamp =>
  entryChamp.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// ENTRY EVENT QUERY
/*
db.entryEvent.findAll({
  where: {
    ChampId: 3,
  },
}).then(entryEvent =>
  entryEvent.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// ENTRY SESSION QUERY
/*
db.entrySession.findAll({
  where: {
    ChampId: 3,
  },
}).then(entrySession =>
  entrySession.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// EVENT QUERY
/*
db.event.findAll({
  where: {
    Season: 2017,
  },
}).then(events =>
  events.forEach((event) => {
    console.log(event.get({
      plain: true,
    }));
  }),
);
*/

// GIVEN POINTS QUERY
/*
db.givenPoints.findAll({
  where: {
    ChampId: 3,
  },
}).then(givenPoints =>
  givenPoints.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// GRID QUERY
/*
db.grid.findAll({
  where: {
    Season: 2016,
    ChampId: 3,
  },
}).then(grid =>
  grid.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// INCIDENT QUERY
/*
db.incident.findAll({
  where: {
    Season: 2016,
    ChampId: 3,
  },
}).then(incident =>
  incident.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// INCIDENT WEATHER QUERY
/*
db.incWeather.findAll({
  where: {
    Season: 2016,
    ChampId: 3,
  },
}).then(incWeather =>
  incWeather.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// IRTA TEAMS QUERY
/*
db.IRTATeams.findAll().then(IRTATeams =>
  IRTATeams.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// LAP CHART QUERY
/*
db.lapChart.findAll().then(lapChart =>
  lapChart.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// LAP CHART IP QUERY
/*
db.lapChartIP.findAll().then(lapChartIP =>
  lapChartIP.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// MONITOR INFORMATION QUERY
/*
db.monitorInformation.findAll().then(monitorInformation =>
  monitorInformation.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// NATION QUERY
/*
db.nation.findAll().then(nation =>
  nation.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// NEW POST CORRESPONDENCY QUERY
/*
db.newPostCorrespondency.findAll().then(newPostCorrespondency =>
  newPostCorrespondency.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// OUTPUT EXCLUSIONS QUERY
/*
db.outputExclusions.findAll().then(outputExclusions =>
  outputExclusions.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// PAST RESULT QUERY
/*
db.pastResult.findAll().then(pastResult =>
  pastResult.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// POINTS QUERY
/*
db.points.findAll().then(points =>
  points.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// POST QUERY
/*
db.post.findAll().then(post =>
  post.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// POST DEVICES QUERY
/*
db.postDevices.findAll().then(postDevices =>
  postDevices.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// PRE GRID CONFIG QUERY
/*
db.preGridConfig.findAll().then(preGridConfig =>
  preGridConfig.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// PRE GRID SOURCES QUERY
/*
db.preGridSources.findAll().then(preGridSources =>
  preGridSources.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// PRINT QUEUE QUERY
/*
db.printQueue.findAll().then(printQueue =>
  printQueue.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// RDS PRINTER SETTINGS QUERY
/*
db.RDSPrinterSettings.findAll().then(RDSPrinterSettings =>
  RDSPrinterSettings.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// RDS QUEUE QUERY
/*
db.RDSQueue.findAll().then(RDSQueue =>
  RDSQueue.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// RDS QUEUE SUBSCRIPTIONS QUERY
/*
db.RDSQueueSubscriptions.findAll().then(RDSQueueSubscriptions =>
  RDSQueueSubscriptions.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// RDS QUEUE RECIPIENTS QUERY
/*
db.RDSRecipients.findAll().then(RDSRecipients =>
  RDSRecipients.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// RDS SUBSCRIPTIONS QUERY
/*
db.RDSSubscriptions.findAll().then(RDSSubscriptions =>
  RDSSubscriptions.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// SESSION QUERY
/*
db.session.findAll().then(session =>
  session.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// SESSION QUERY
/*
db.sessionCowntDown.findAll().then(sessionCowntDown =>
  sessionCowntDown.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// SESSION NAME QUERY
/*
db.sessionName.findAll().then(sessionName =>
  sessionName.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// SESSION PENALTY QUERY
/*
db.sessionPenalties.findAll().then(sessionPenalties =>
  sessionPenalties.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// SESSION POST QUERY
/*
db.sessionPost.findAll().then(sessionPost =>
  sessionPost.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// STANDING IRTA RANKING QUERY
/*
db.standingIRTARanking.findAll().then(standingIRTARanking =>
  standingIRTARanking.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// STANDINGS QUERY
/*
db.standings.findAll().then(standings =>
  standings.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// STANDINGS TIMES QUERY
/*
db.standingsTime.findAll().then(standingsTimes =>
  standingsTimes.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// STANDINGS TIME NEUTRALIZED QUERY
/*
db.standingsTimeNeutralized.findAll().then(standingsTimeNeutralized =>
  standingsTimeNeutralized.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// TEAMS QUERY
/*
db.teams.findAll().then(teams =>
  teams.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// TRACK QUERY
/*
db.track.findAll().then(track =>
  track.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// TRACK CAMERA QUERY
/*
db.trackCamera.findAll().then(trackCamera =>
  trackCamera.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);
*/

// TRACK DATA QUERY
db.trackData.findAll().then(trackData =>
  trackData.forEach((item) => {
    console.log(item.get({
      plain: true,
    }));
  }),
);

const Event = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    Season: {
      type: GraphQLInt,
    },
    ChampId: {
      type: GraphQLInt,
    },
    EventId: {
      type: GraphQLInt,
    },
    Sequence: {
      type: GraphQLInt,
    },
    Name: {
      type: GraphQLString,
    },
    DateOfStart: {
      type: CustomGraphQLDateType,
    },
    DateOfEnd: {
      type: CustomGraphQLDateType,
    },
    Situation: {
      type: GraphQLInt,
    },
    TrackId: {
      type: GraphQLInt,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getEvents: {
      type: new GraphQLList(Event),
      args: {
        Season: {
          type: GraphQLInt,
        },
        EventId: {
          type: GraphQLInt,
        },
      },
      resolve: resolver(db.event),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

module.exports = db;
