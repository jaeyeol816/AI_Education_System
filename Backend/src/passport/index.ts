import local from './localStrategy';
import jwt from './jwtStrategy';

export default () => {
	local();
	jwt();
}