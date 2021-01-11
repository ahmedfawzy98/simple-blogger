import { GraphQLDateTime } from 'graphql-iso-date';
import {asNexusMethod} from 'nexus';

export const timeStamp = asNexusMethod(GraphQLDateTime, 'timestamp');
