import { Container } from 'typedi';
import { NotesRepositoryHttp } from '../../infrastructure/HTTP/services/notes-repository-http';
import { NOTE_REPOSITORY } from './tokens';


Container.set(NOTE_REPOSITORY, new NotesRepositoryHttp());

export {Container};